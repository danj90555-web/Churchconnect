'use client';

import { useAuth } from '@/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import apiClient from '@/utils/api';
import { FiUsers, FiMessageSquare, FiVideo, FiTrendingUp } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export default function Dashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalMembers: 0,
    activeChats: 0,
    liveStreams: 0,
    events: 0,
  });

  useEffect(() => {
    // Fetch dashboard stats
    const fetchStats = async () => {
      try {
        const response = await apiClient.get('/dashboard/stats');
        setStats(response.data);
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      }
    };

    fetchStats();
  }, []);

  const StatCard = ({ icon: Icon, label, value }: any) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium">{label}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
        </div>
        <div className="p-3 bg-primary-100 rounded-lg">
          <Icon className="text-primary-600" size={24} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">
          Bienvenue, {user?.user_metadata?.first_name}! 👋
        </h1>
        <p className="text-gray-600 mt-2">Voici un aperçu de votre église</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard icon={FiUsers} label="Membres" value={stats.totalMembers} />
        <StatCard icon={FiMessageSquare} label="Chats Actifs" value={stats.activeChats} />
        <StatCard icon={FiVideo} label="Lives" value={stats.liveStreams} />
        <StatCard icon={FiTrendingUp} label="Événements" value={stats.events} />
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Messages */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Activité Récente</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between border-b pb-4 last:border-b-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full" />
                  <div>
                    <p className="font-semibold">Nouveau message</p>
                    <p className="text-sm text-gray-500">Il y a {i * 5} minutes</p>
                  </div>
                </div>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Nouveau</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Actions Rapides</h2>
          <div className="space-y-3">
            <button className="w-full py-2 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition font-semibold">
              📡 Démarrer Live
            </button>
            <button className="w-full py-2 px-4 bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100 transition font-semibold">
              📢 Nouvelle Annonce
            </button>
            <button className="w-full py-2 px-4 bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100 transition font-semibold">
              👥 Créer Communauté
            </button>
            <button className="w-full py-2 px-4 bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100 transition font-semibold">
              📅 Créer Événement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
