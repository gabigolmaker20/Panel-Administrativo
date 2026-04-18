import { Users, Package, UserCog, TrendingUp, ArrowUpRight, Activity, ShoppingCart } from 'lucide-react';
import { clientes, proveedores, usuarios } from '../data/mockData';

const stats = [
  { label: 'Clientes', value: clientes.length, sub: '+2 este mes', icon: Users, color: 'text-brand-400', glow: 'glow-brand', border: 'border-brand-500/20', bg: 'bg-brand-500/10' },
  { label: 'Proveedores', value: proveedores.length, sub: 'Todos activos', icon: Package, color: 'text-purple-400', glow: 'glow-purple', border: 'border-purple-500/20', bg: 'bg-purple-500/10' },
  { label: 'Usuarios', value: usuarios.length, sub: '3 en línea', icon: UserCog, color: 'text-cyan-400', glow: 'glow-cyan', border: 'border-cyan-500/20', bg: 'bg-cyan-500/10' },
  { label: 'Ventas del Mes', value: '$17.4M', sub: '+12% vs anterior', icon: TrendingUp, color: 'text-emerald-400', glow: 'glow-emerald', border: 'border-emerald-500/20', bg: 'bg-emerald-500/10' },
];

const activityFeed = [
  { user: 'Camilo Torres', action: 'realizó una compra de $450,000', time: 'Hace 5 min', type: 'compra' },
  { user: 'CloudNet Corp', action: 'actualizó su catálogo de productos', time: 'Hace 22 min', type: 'proveedor' },
  { user: 'Isabel Montoya', action: 'inició sesión desde Medellín', time: 'Hace 30 min', type: 'usuario' },
  { user: 'Sofía Martínez', action: 'completó su perfil de cliente', time: 'Hace 1 hora', type: 'cliente' },
  { user: 'DataSolutions', action: 'envió nueva cotización', time: 'Hace 2 horas', type: 'proveedor' },
];

const typeColors = {
  compra: 'bg-emerald-500',
  proveedor: 'bg-purple-500',
  usuario: 'bg-cyan-500',
  cliente: 'bg-brand-500',
};

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Welcome banner */}
      <div className="glass rounded-2xl p-6 border border-brand-500/20 glow-brand relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/10 rounded-full -translate-y-32 translate-x-32 blur-3xl pointer-events-none"></div>
        <div className="relative z-10">
          <p className="text-slate-400 text-sm mb-1">Bienvenido de vuelta 👋</p>
          <h2 className="font-display font-800 text-2xl text-white mb-1">Admin Principal</h2>
          <p className="text-slate-400 text-sm">Aquí tienes un resumen del estado actual de tu sistema.</p>
        </div>
        <div className="absolute bottom-4 right-6 opacity-10">
          <Activity size={80} className="text-brand-400" />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`glass rounded-2xl p-5 border ${s.border} ${s.glow} animate-slide-up`}
            style={{ animationDelay: `${i * 80}ms`, animationFillMode: 'both', opacity: 0 }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center`}>
                <s.icon size={20} className={s.color} />
              </div>
              <ArrowUpRight size={16} className="text-slate-600" />
            </div>
            <p className="font-display font-800 text-2xl text-white">{s.value}</p>
            <p className="text-slate-400 text-sm mt-0.5">{s.label}</p>
            <p className="text-xs text-emerald-400 mt-2">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Activity feed */}
        <div className="glass rounded-2xl p-5 border border-white/5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-700 text-white">Actividad Reciente</h3>
            <span className="text-xs text-slate-500">Últimas 24h</span>
          </div>
          <div className="space-y-3">
            {activityFeed.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl glass-hover">
                <div className={`w-2 h-2 rounded-full ${typeColors[item.type]} mt-1.5 shrink-0`}></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white font-500">{item.user}</p>
                  <p className="text-xs text-slate-500">{item.action}</p>
                </div>
                <span className="text-xs text-slate-600 shrink-0">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick stats / Top clients */}
        <div className="glass rounded-2xl p-5 border border-white/5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-700 text-white">Top Clientes</h3>
            <ShoppingCart size={16} className="text-slate-500" />
          </div>
          <div className="space-y-3">
            {clientes.slice(0, 5).map((c, i) => (
              <div key={c.id} className="flex items-center gap-3 p-2 rounded-xl glass-hover">
                <span className="text-xs text-slate-600 w-5 text-center font-700">{i + 1}</span>
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center text-xs font-700 text-white shrink-0">
                  {c.nombre.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white font-500 truncate">{c.nombre}</p>
                  <p className="text-xs text-slate-500">{c.ciudad}</p>
                </div>
                <span className="text-sm font-600 text-emerald-400">{c.total}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
