import { useState } from 'react';
import { UserCog, Search, Plus, Shield, Clock } from 'lucide-react';
import { usuarios } from '../data/mockData';

const estadoStyle = {
  'En línea': { dot: 'bg-emerald-400', text: 'text-emerald-400' },
  'Ausente': { dot: 'bg-amber-400', text: 'text-amber-400' },
  'Desconectado': { dot: 'bg-slate-500', text: 'text-slate-500' },
};

const rolColor = {
  Administrador: 'bg-red-500/15 text-red-400 border border-red-500/20',
  Gerente: 'bg-brand-500/15 text-brand-400 border border-brand-500/20',
  Analista: 'bg-purple-500/15 text-purple-400 border border-purple-500/20',
  Soporte: 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/20',
};

export default function Usuarios() {
  const [buscar, setBuscar] = useState('');
  const filtrados = usuarios.filter(u =>
    u.nombre.toLowerCase().includes(buscar.toLowerCase()) ||
    u.email.toLowerCase().includes(buscar.toLowerCase()) ||
    u.rol.toLowerCase().includes(buscar.toLowerCase()) ||
    u.departamento.toLowerCase().includes(buscar.toLowerCase())
  );

  return (
    <div className="p-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-display font-700 text-xl text-white">Usuarios del Sistema</h2>
          <p className="text-slate-500 text-sm">{usuarios.filter(u => u.estado === 'En línea').length} en línea · {usuarios.length} total</p>
        </div>
        <button className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-500 px-4 py-2 rounded-xl transition-colors">
          <Plus size={16} /> Nuevo Usuario
        </button>
      </div>

      <div className="glass rounded-xl p-4 border border-white/5 mb-4">
        <div className="relative max-w-sm">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            value={buscar}
            onChange={e => setBuscar(e.target.value)}
            placeholder="Buscar usuario..."
            className="w-full bg-white/5 border border-white/8 rounded-lg pl-9 pr-4 py-2 text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50"
          />
        </div>
      </div>

      <div className="glass rounded-2xl border border-white/5 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/5">
              <th className="text-left text-xs text-slate-500 font-600 uppercase tracking-wider px-5 py-3">Usuario</th>
              <th className="text-left text-xs text-slate-500 font-600 uppercase tracking-wider px-5 py-3">Rol</th>
              <th className="text-left text-xs text-slate-500 font-600 uppercase tracking-wider px-5 py-3">Departamento</th>
              <th className="text-left text-xs text-slate-500 font-600 uppercase tracking-wider px-5 py-3">Último acceso</th>
              <th className="text-left text-xs text-slate-500 font-600 uppercase tracking-wider px-5 py-3">Estado</th>
            </tr>
          </thead>
          <tbody>
            {filtrados.map((u, i) => {
              const est = estadoStyle[u.estado];
              return (
                <tr
                  key={u.id}
                  className="table-row-hover border-b border-white/3 animate-slide-up"
                  style={{ animationDelay: `${i * 50}ms`, animationFillMode: 'both', opacity: 0 }}
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-brand-600 flex items-center justify-center text-xs font-700 text-white">
                          {u.nombre.charAt(0)}
                        </div>
                        <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full ${est.dot} border-2 border-slate-950`}></div>
                      </div>
                      <div>
                        <p className="text-sm text-white font-500">{u.nombre}</p>
                        <p className="text-xs text-slate-500">{u.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <Shield size={13} className="text-slate-500" />
                      <span className={`text-xs font-500 px-2.5 py-1 rounded-full ${rolColor[u.rol]}`}>
                        {u.rol}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-400">{u.departamento}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Clock size={12} />{u.ultimoAcceso}
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className={`flex items-center gap-2 text-xs font-500 ${est.text}`}>
                      <div className={`w-2 h-2 rounded-full ${est.dot}`}></div>
                      {u.estado}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
