import { useState } from 'react';
import { Users, Search, Plus, MoreHorizontal, MapPin } from 'lucide-react';
import { clientes } from '../data/mockData';

const estadoStyle = {
  Activo: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30',
  Inactivo: 'bg-slate-500/15 text-slate-400 border border-slate-500/30',
  Pendiente: 'bg-amber-500/15 text-amber-400 border border-amber-500/30',
};

export default function Clientes() {
  const [buscar, setBuscar] = useState('');
  const filtrados = clientes.filter(c =>
    c.nombre.toLowerCase().includes(buscar.toLowerCase()) ||
    c.email.toLowerCase().includes(buscar.toLowerCase()) ||
    c.ciudad.toLowerCase().includes(buscar.toLowerCase())
  );

  return (
    <div className="p-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-display font-700 text-xl text-white">Clientes</h2>
          <p className="text-slate-500 text-sm">{clientes.length} clientes registrados</p>
        </div>
        <button className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-500 px-4 py-2 rounded-xl transition-colors">
          <Plus size={16} /> Nuevo Cliente
        </button>
      </div>

      {/* Search */}
      <div className="glass rounded-xl p-4 border border-white/5 mb-4">
        <div className="relative max-w-sm">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            value={buscar}
            onChange={e => setBuscar(e.target.value)}
            placeholder="Buscar cliente..."
            className="w-full bg-white/5 border border-white/8 rounded-lg pl-9 pr-4 py-2 text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-brand-500/50"
          />
        </div>
      </div>

      {/* Table */}
      <div className="glass rounded-2xl border border-white/5 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/5">
              <th className="text-left text-xs text-slate-500 font-600 uppercase tracking-wider px-5 py-3">Cliente</th>
              <th className="text-left text-xs text-slate-500 font-600 uppercase tracking-wider px-5 py-3">Contacto</th>
              <th className="text-left text-xs text-slate-500 font-600 uppercase tracking-wider px-5 py-3">Ciudad</th>
              <th className="text-left text-xs text-slate-500 font-600 uppercase tracking-wider px-5 py-3">Compras</th>
              <th className="text-left text-xs text-slate-500 font-600 uppercase tracking-wider px-5 py-3">Total</th>
              <th className="text-left text-xs text-slate-500 font-600 uppercase tracking-wider px-5 py-3">Estado</th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {filtrados.map((c, i) => (
              <tr
                key={c.id}
                className="table-row-hover border-b border-white/3 animate-slide-up"
                style={{ animationDelay: `${i * 50}ms`, animationFillMode: 'both', opacity: 0 }}
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center text-xs font-700 text-white shrink-0">
                      {c.nombre.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm text-white font-500">{c.nombre}</p>
                      <p className="text-xs text-slate-500">#{c.id.toString().padStart(4,'0')}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <p className="text-sm text-slate-300">{c.email}</p>
                  <p className="text-xs text-slate-500">{c.telefono}</p>
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-1.5 text-sm text-slate-400">
                    <MapPin size={13} />
                    {c.ciudad}
                  </div>
                </td>
                <td className="px-5 py-4 text-sm text-slate-300">{c.compras}</td>
                <td className="px-5 py-4 text-sm font-600 text-emerald-400">{c.total}</td>
                <td className="px-5 py-4">
                  <span className={`text-xs font-500 px-2.5 py-1 rounded-full ${estadoStyle[c.estado]}`}>
                    {c.estado}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <button className="text-slate-600 hover:text-slate-300 transition-colors">
                    <MoreHorizontal size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtrados.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            <Users size={40} className="mx-auto mb-3 opacity-30" />
            <p>No se encontraron clientes</p>
          </div>
        )}
      </div>
    </div>
  );
}
