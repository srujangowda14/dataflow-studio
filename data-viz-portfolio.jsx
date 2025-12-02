import React, { useState, useEffect, useRef } from 'react';
import { LineChart, Line, BarChart, Bar, ScatterChart, Scatter, PieChart, Pie, Cell, 
         XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { Camera, TrendingUp, Users, Globe, Zap, Code, Database, BarChart3 } from 'lucide-react';

// Color palette
const colors = {
  primary: '#3b82f6',
  secondary: '#8b5cf6',
  accent: '#ec4899',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
  dark: '#1e293b',
  light: '#f8fafc'
};

// Sample datasets
const techAdoptionData = [
  { year: 2018, ai: 23, cloud: 67, blockchain: 12, iot: 34, ar: 8 },
  { year: 2019, ai: 31, cloud: 74, blockchain: 18, iot: 42, ar: 14 },
  { year: 2020, ai: 45, cloud: 82, blockchain: 24, iot: 51, ar: 22 },
  { year: 2021, ai: 58, cloud: 88, blockchain: 31, iot: 63, ar: 29 },
  { year: 2022, ai: 72, cloud: 92, blockchain: 38, iot: 71, ar: 38 },
  { year: 2023, ai: 84, cloud: 95, blockchain: 45, iot: 79, ar: 47 },
  { year: 2024, ai: 91, cloud: 97, blockchain: 52, iot: 85, ar: 56 }
];

const globalCarbonData = [
  { region: 'North America', emissions: 5200, population: 580, renewable: 28 },
  { region: 'Europe', emissions: 3800, population: 750, renewable: 42 },
  { region: 'Asia', emissions: 16500, population: 4600, renewable: 18 },
  { region: 'South America', emissions: 1200, population: 430, renewable: 65 },
  { region: 'Africa', emissions: 1400, population: 1340, renewable: 23 },
  { region: 'Oceania', emissions: 550, population: 43, renewable: 35 }
];

const startupMetrics = [
  { month: 'Jan', users: 1200, revenue: 45000, engagement: 68 },
  { month: 'Feb', users: 1850, revenue: 62000, engagement: 72 },
  { month: 'Mar', users: 2400, revenue: 78000, engagement: 75 },
  { month: 'Apr', users: 3100, revenue: 95000, engagement: 79 },
  { month: 'May', users: 4200, revenue: 125000, engagement: 82 },
  { month: 'Jun', users: 5800, revenue: 168000, engagement: 85 },
  { month: 'Jul', users: 7500, revenue: 210000, engagement: 87 },
  { month: 'Aug', users: 9200, revenue: 265000, engagement: 89 },
  { month: 'Sep', users: 11500, revenue: 320000, engagement: 91 },
  { month: 'Oct', users: 14200, revenue: 385000, engagement: 92 },
  { month: 'Nov', users: 17800, revenue: 465000, engagement: 94 },
  { month: 'Dec', users: 22000, revenue: 550000, engagement: 95 }
];

const industryDistribution = [
  { name: 'Technology', value: 32, color: colors.primary },
  { name: 'Healthcare', value: 18, color: colors.success },
  { name: 'Finance', value: 22, color: colors.secondary },
  { name: 'Retail', value: 15, color: colors.warning },
  { name: 'Manufacturing', value: 13, color: colors.accent }
];

const DataVizPortfolio = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [animatedValue, setAnimatedValue] = useState(0);
  const [hoveredRegion, setHoveredRegion] = useState(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValue(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'tech-trends', label: 'Tech Adoption', icon: TrendingUp },
    { id: 'global-impact', label: 'Global Impact', icon: Globe },
    { id: 'growth-analytics', label: 'Growth Analytics', icon: Zap },
    { id: 'about', label: 'About', icon: Code }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-xl border border-gray-200">
          <p className="font-bold text-gray-800 mb-2">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {typeof entry.value === 'number' ? entry.value.toLocaleString() : entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black bg-opacity-40 backdrop-blur-md border-b border-white border-opacity-10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">DataViz Studio</h1>
                <p className="text-sm text-gray-300">Interactive Data Storytelling</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-400">Portfolio by</p>
                <p className="text-white font-semibold">Srujan Konda</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-black bg-opacity-30 backdrop-blur-md border-b border-white border-opacity-10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-1">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-4 transition-all ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white border-b-2 border-blue-400'
                      : 'text-gray-300 hover:bg-white hover:bg-opacity-10'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-white mb-4">
                Data Visualization Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transforming complex data into compelling visual narratives through modern web technologies
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {[
                { label: 'Visualizations', value: '25+', icon: BarChart3, color: 'from-blue-500 to-blue-600' },
                { label: 'Technologies', value: '12', icon: Code, color: 'from-purple-500 to-purple-600' },
                { label: 'Data Points', value: '1M+', icon: Database, color: 'from-pink-500 to-pink-600' },
                { label: 'Projects', value: '8', icon: Zap, color: 'from-green-500 to-green-600' }
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all">
                    <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Featured Visualization Preview */}
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold text-white mb-6">Industry Distribution Analysis</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={industryDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {industryDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex flex-col justify-center space-y-4">
                  {industryDistribution.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }}></div>
                        <span className="text-white">{item.name}</span>
                      </div>
                      <span className="text-gray-300 font-semibold">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tech-trends' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">Technology Adoption Trends</h2>
              <p className="text-gray-300 text-lg">Tracking the rise of emerging technologies from 2018-2024</p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 border border-white border-opacity-20">
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={techAdoptionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="year" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line type="monotone" dataKey="ai" stroke="#3b82f6" strokeWidth={3} name="AI/ML" />
                  <Line type="monotone" dataKey="cloud" stroke="#10b981" strokeWidth={3} name="Cloud Computing" />
                  <Line type="monotone" dataKey="blockchain" stroke="#f59e0b" strokeWidth={3} name="Blockchain" />
                  <Line type="monotone" dataKey="iot" stroke="#ec4899" strokeWidth={3} name="IoT" />
                  <Line type="monotone" dataKey="ar" stroke="#8b5cf6" strokeWidth={3} name="AR/VR" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20">
                <h3 className="text-xl font-bold text-white mb-4">Key Insights</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>AI/ML adoption grew 295% from 2018 to 2024, showing exponential growth</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Cloud computing reached 97% adoption, becoming ubiquitous across industries</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Blockchain adoption tripled, driven by enterprise use cases beyond cryptocurrency</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>AR/VR showed steady growth with breakthrough applications in 2023-2024</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20">
                <h3 className="text-xl font-bold text-white mb-4">Technology Comparison 2024</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={[techAdoptionData[techAdoptionData.length - 1]]} layout="vertical">
                    <XAxis type="number" stroke="#fff" />
                    <YAxis type="category" dataKey="year" hide />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="ai" fill="#3b82f6" name="AI/ML" />
                    <Bar dataKey="cloud" fill="#10b981" name="Cloud" />
                    <Bar dataKey="blockchain" fill="#f59e0b" name="Blockchain" />
                    <Bar dataKey="iot" fill="#ec4899" name="IoT" />
                    <Bar dataKey="ar" fill="#8b5cf6" name="AR/VR" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'global-impact' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">Global Carbon Emissions Analysis</h2>
              <p className="text-gray-300 text-lg">Regional emissions, population, and renewable energy adoption</p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 border border-white border-opacity-20">
              <ResponsiveContainer width="100%" height={400}>
                <ScatterChart>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    type="number" 
                    dataKey="population" 
                    name="Population (M)" 
                    stroke="#fff"
                    label={{ value: 'Population (Millions)', position: 'insideBottom', offset: -5, fill: '#fff' }}
                  />
                  <YAxis 
                    type="number" 
                    dataKey="emissions" 
                    name="Emissions (MT)" 
                    stroke="#fff"
                    label={{ value: 'CO₂ Emissions (MT)', angle: -90, position: 'insideLeft', fill: '#fff' }}
                  />
                  <Tooltip 
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-white p-4 rounded-lg shadow-xl border border-gray-200">
                            <p className="font-bold text-gray-800 mb-2">{data.region}</p>
                            <p className="text-sm text-gray-600">Population: {data.population}M</p>
                            <p className="text-sm text-gray-600">Emissions: {data.emissions} MT</p>
                            <p className="text-sm text-green-600">Renewable: {data.renewable}%</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Scatter 
                    name="Regions" 
                    data={globalCarbonData} 
                    fill="#3b82f6"
                    onMouseEnter={(data) => setHoveredRegion(data.region)}
                    onMouseLeave={() => setHoveredRegion(null)}
                  >
                    {globalCarbonData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={hoveredRegion === entry.region ? '#ec4899' : '#3b82f6'}
                        r={hoveredRegion === entry.region ? 10 : 8}
                      />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20">
                <h3 className="text-xl font-bold text-white mb-4">Renewable Energy Adoption</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={globalCarbonData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="region" stroke="#fff" angle={-45} textAnchor="end" height={100} />
                    <YAxis stroke="#fff" />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="renewable" fill="#10b981" name="Renewable Energy %" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20">
                <h3 className="text-xl font-bold text-white mb-4">Regional Breakdown</h3>
                <div className="space-y-4">
                  {globalCarbonData.map((region, idx) => (
                    <div key={idx} className="border-l-4 border-blue-500 pl-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-white font-semibold">{region.region}</span>
                        <span className="text-gray-400 text-sm">{region.emissions} MT CO₂</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>{region.population}M people</span>
                        <span className="text-green-400">{region.renewable}% renewable</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'growth-analytics' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">Startup Growth Analytics Dashboard</h2>
              <p className="text-gray-300 text-lg">Monthly user growth, revenue, and engagement metrics</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <Users size={32} />
                  <span className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full">+24%</span>
                </div>
                <div className="text-3xl font-bold mb-1">22,000</div>
                <div className="text-blue-100">Total Users</div>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <TrendingUp size={32} />
                  <span className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full">+18%</span>
                </div>
                <div className="text-3xl font-bold mb-1">$550K</div>
                <div className="text-green-100">Monthly Revenue</div>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <Zap size={32} />
                  <span className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full">+3%</span>
                </div>
                <div className="text-3xl font-bold mb-1">95%</div>
                <div className="text-purple-100">Engagement Rate</div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold text-white mb-6">User Growth & Revenue Trends</h3>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={startupMetrics}>
                  <defs>
                    <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="month" stroke="#fff" />
                  <YAxis yAxisId="left" stroke="#fff" />
                  <YAxis yAxisId="right" orientation="right" stroke="#fff" />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Area 
                    yAxisId="left"
                    type="monotone" 
                    dataKey="users" 
                    stroke="#3b82f6" 
                    fillOpacity={1} 
                    fill="url(#colorUsers)"
                    name="Users"
                  />
                  <Area 
                    yAxisId="right"
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#10b981" 
                    fillOpacity={1} 
                    fill="url(#colorRevenue)"
                    name="Revenue ($)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold text-white mb-6">Engagement Rate Progression</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={startupMetrics}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="month" stroke="#fff" />
                  <YAxis stroke="#fff" domain={[0, 100]} />
                  <Tooltip content={<CustomTooltip />} />
                  <Line 
                    type="monotone" 
                    dataKey="engagement" 
                    stroke="#ec4899" 
                    strokeWidth={3}
                    name="Engagement %"
                    dot={{ fill: '#ec4899', r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="space-y-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 border border-white border-opacity-20">
              <h2 className="text-4xl font-bold text-white mb-6">About This Portfolio</h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  This interactive data visualization portfolio demonstrates advanced skills in data storytelling, 
                  front-end development, and visualization design. Built with modern web technologies, it showcases 
                  the ability to transform complex datasets into compelling visual narratives.
                </p>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Technologies Used</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      'React', 'JavaScript', 'Recharts', 'Tailwind CSS', 'Lucide Icons', 'Node.js'
                    ].map((tech, idx) => (
                      <div key={idx} className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
                        <Code className="mx-auto mb-2 text-blue-400" size={24} />
                        <div className="font-semibold text-white">{tech}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span>Multiple interactive visualization types: line charts, bar charts, scatter plots, pie charts, and area charts</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span>Responsive design that works seamlessly across desktop, tablet, and mobile devices</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span>Custom tooltips and interactive elements that enhance data exploration</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span>Modern UI with gradient backgrounds, glassmorphism effects, and smooth transitions</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span>Data storytelling across multiple domains: technology trends, environmental impact, and business analytics</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Design Principles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 bg-opacity-20 rounded-lg p-6">
                      <h4 className="font-bold text-white mb-2">Clarity</h4>
                      <p className="text-sm">Every visualization prioritizes clear communication of insights over complexity</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 bg-opacity-20 rounded-lg p-6">
                      <h4 className="font-bold text-white mb-2">Interactivity</h4>
                      <p className="text-sm">Users can explore data through hover effects, tooltips, and dynamic filtering</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-500 to-green-600 bg-opacity-20 rounded-lg p-6">
                      <h4 className="font-bold text-white mb-2">Aesthetics</h4>
                      <p className="text-sm">Beautiful design that engages users while maintaining professional standards</p>
                    </div>
                    <div className="bg-gradient-to-br from-pink-500 to-pink-600 bg-opacity-20 rounded-lg p-6">
                      <h4 className="font-bold text-white mb-2">Performance</h4>
                      <p className="text-sm">Optimized rendering and responsive components for smooth user experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">Created by Srujan Konda</h3>
              <p className="text-blue-100 text-lg mb-6">
                Computer Science Graduate Student at USC | Full-Stack Developer | Data Visualization Specialist
              </p>
              <div className="flex justify-center space-x-4">
                <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg px-6 py-3">
                  <div className="text-white font-semibold">Java</div>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg px-6 py-3">
                  <div className="text-white font-semibold">Python</div>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg px-6 py-3">
                  <div className="text-white font-semibold">React</div>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg px-6 py-3">
                  <div className="text-white font-semibold">Node.js</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-black bg-opacity-40 backdrop-blur-md border-t border-white border-opacity-10 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center text-gray-400">
            <p>© 2024 DataViz Studio by Srujan Konda. Built with React & Recharts.</p>
            <p className="mt-2 text-sm">Interactive Data Visualization Portfolio</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DataVizPortfolio;