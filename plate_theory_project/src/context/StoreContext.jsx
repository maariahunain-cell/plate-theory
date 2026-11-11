import { createContext, useContext, useEffect, useMemo, useState } from 'react'
const StoreContext = createContext(null)
const readJSON = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)) } catch { return fallback } }
export function StoreProvider({children}) {
  const [users, setUsers] = useState(() => readJSON('plate theoryUsers', []))
  const [user, setUser] = useState(() => { const saved=readJSON('plate theoryUser',null); const list=readJSON('plate theoryUsers',[]); return saved?.id&&list.some(u=>u.id===saved.id)?saved:null })
  const [cart, setCart] = useState(() => readJSON('plate theoryCart', []))
  const [orders, setOrders] = useState(() => readJSON('plate theoryOrders', []))
  const [theme, setTheme] = useState(() => localStorage.getItem('plate theoryTheme') || 'light')
  useEffect(()=>{ localStorage.setItem('plate theoryUsers',JSON.stringify(users)) },[users])
  useEffect(()=>{ if(user) localStorage.setItem('plate theoryUser',JSON.stringify(user)); else localStorage.removeItem('plate theoryUser') },[user])
  useEffect(()=>{ localStorage.setItem('plate theoryCart',JSON.stringify(cart)) },[cart])
  useEffect(()=>{ localStorage.setItem('plate theoryOrders',JSON.stringify(orders)) },[orders])
  useEffect(()=>{ localStorage.setItem('plate theoryTheme',theme) },[theme])
  const signup=({name,email,password})=>{const normalized=email.trim().toLowerCase();if(users.some(u=>u.email===normalized))return{ok:false,message:'An account with this email already exists.'};const newUser={id:`PLATE THEORY-${Math.random().toString(36).slice(2,8).toUpperCase()}`,name:name.trim(),email:normalized,password};setUsers(p=>[...p,newUser]);setUser({id:newUser.id,name:newUser.name,email:newUser.email});return{ok:true,user:newUser}}
  const login=({username,password})=>{const id=username.trim().toLowerCase();const found=users.find(u=>(u.email===id||u.id.toLowerCase()===id||u.name.trim().toLowerCase()===id)&&u.password===password);if(!found)return{ok:false,message:'Invalid user ID/email or password. Please sign up first.'};setUser({id:found.id,name:found.name,email:found.email});return{ok:true,user:found}}
  const logout=()=>setUser(null); const toggleTheme=()=>setTheme(p=>p==='dark'?'light':'dark')
  const addToCart=(product,size='M')=>setCart(prev=>{const found=prev.find(i=>i.id===product.id&&i.size===size);return found?prev.map(i=>i.id===product.id&&i.size===size?{...i,qty:i.qty+1}:i):[...prev,{id:product.id,size,qty:1}]})
  const removeFromCart=(id,size)=>setCart(p=>p.filter(i=>!(i.id===id&&i.size===size))); const updateQty=(id,size,qty)=>setCart(p=>p.map(i=>i.id===id&&i.size===size?{...i,qty:Math.max(1,qty)}:i)); const clearCart=()=>setCart([]); const count=cart.reduce((n,i)=>n+i.qty,0)
  const createOrder=order=>{const created={...order,orderId:`PLATE THEORY-${Date.now().toString().slice(-7)}`,userId:user.id,customerName:user.name,customerEmail:user.email,createdAt:new Date().toISOString(),status:'Confirmed'};setOrders(p=>[created,...p]);setCart([]);return created}
  const myOrders=useMemo(()=>user?orders.filter(o=>o.userId===user.id):[],[orders,user])
  return <StoreContext.Provider value={{user,users,signup,login,logout,cart,addToCart,removeFromCart,updateQty,clearCart,count,theme,toggleTheme,orders,myOrders,createOrder}}>{children}</StoreContext.Provider>
}
export const useStore=()=>useContext(StoreContext)
