import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [breathingActive, setBreathingActive] = useState(false);
  const [breathingPhase, setBreathingPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [currentTime] = useState(new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }));

  const startBreathing = () => {
    setBreathingActive(true);
    const cycle = () => {
      setBreathingPhase('inhale');
      setTimeout(() => {
        setBreathingPhase('hold');
        setTimeout(() => {
          setBreathingPhase('exhale');
          setTimeout(() => {
            if (breathingActive) cycle();
          }, 4000);
        }, 4000);
      }, 4000);
    };
    cycle();
  };

  const widgets = [
    {
      type: 'greeting',
      color: 'from-yellow-400 to-yellow-500',
      textColor: 'text-gray-900',
    },
    {
      type: 'mood',
      color: 'from-pink-400 to-pink-500',
      textColor: 'text-white',
    },
    {
      type: 'meditation',
      color: 'from-blue-400 to-blue-500',
      textColor: 'text-white',
    },
    {
      type: 'activity',
      color: 'from-green-400 to-green-500',
      textColor: 'text-gray-900',
    },
  ];

  const quickActions = [
    { title: 'Дыхание', emoji: '🫁', color: 'bg-pink-500', action: 'breathing' },
    { title: 'Медитация', emoji: '🧘', color: 'bg-blue-500', action: 'meditation' },
    { title: 'Музыка', emoji: '🎵', color: 'bg-purple-500', action: 'music' },
    { title: 'Советы', emoji: '💡', color: 'bg-yellow-500', action: 'tips' },
  ];

  const psychologyTips = [
    {
      title: 'Техника 5-4-3-2-1',
      description: 'Метод быстрого заземления при тревоге',
      time: '2 мин',
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Метод Помодоро',
      description: 'Эффективная учёба с перерывами',
      time: '25 мин',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Прогрессивная релаксация',
      description: 'Расслабление через напряжение мышц',
      time: '10 мин',
      color: 'from-teal-500 to-cyan-500',
    },
  ];

  const moodStats = [
    { day: 'Пн', value: 70 },
    { day: 'Вт', value: 85 },
    { day: 'Ср', value: 60 },
    { day: 'Чт', value: 90 },
    { day: 'Пт', value: 75 },
    { day: 'Сб', value: 95 },
    { day: 'Вс', value: 80 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-md mx-auto px-4 py-6 space-y-4">
        <header className="flex items-center justify-between mb-6">
          <Button variant="ghost" size="icon" className="text-white">
            <Icon name="ChevronLeft" size={24} />
          </Button>
          <h1 className="text-lg font-semibold text-white">Антистресс 9-11</h1>
          <Button variant="ghost" size="icon" className="text-white">
            <Icon name="MoreVertical" size={24} />
          </Button>
        </header>

        <Card className="bg-gradient-to-br from-yellow-400 to-yellow-500 border-0 shadow-xl animate-scale-in">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-gray-800 font-medium mb-1">Привет! 👋</p>
                <h2 className="text-2xl font-bold text-gray-900">{currentTime}</h2>
              </div>
              <div className="text-5xl">✨</div>
            </div>
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-3 mt-4">
              <p className="text-sm text-gray-900 font-medium">Совет дня</p>
              <p className="text-xs text-gray-800 mt-1">Сделай 5 глубоких вдохов перед началом дня</p>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-gradient-to-br from-pink-400 to-pink-500 border-0 shadow-lg animate-fade-in">
            <CardContent className="pt-6 pb-4">
              <div className="text-4xl mb-3">😊</div>
              <h3 className="text-lg font-bold text-white mb-1">Настроение</h3>
              <div className="flex items-center gap-1 mb-3">
                <span className="text-2xl font-bold text-white">87</span>
                <span className="text-sm text-white/80">%</span>
              </div>
              <div className="flex gap-1">
                {moodStats.slice(-5).map((day, i) => (
                  <div key={i} className="flex-1 bg-white/30 rounded-full h-12 relative overflow-hidden">
                    <div
                      className="absolute bottom-0 w-full bg-white rounded-full transition-all"
                      style={{ height: `${day.value}%` }}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-400 to-blue-500 border-0 shadow-lg animate-fade-in" style={{ animationDelay: '100ms' }}>
            <CardContent className="pt-6 pb-4">
              <div className="text-4xl mb-3">🎧</div>
              <h3 className="text-lg font-bold text-white mb-1">Медитация</h3>
              <p className="text-sm text-white/80 mb-3">Утреннее спокойствие</p>
              <div className="bg-white/30 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center justify-between">
                <Icon name="Play" size={16} className="text-white" />
                <span className="text-xs text-white font-medium">5:00</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-green-400 to-green-500 border-0 shadow-lg animate-fade-in" style={{ animationDelay: '200ms' }}>
          <CardContent className="pt-6 pb-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Активность сегодня</h3>
              <Icon name="TrendingUp" size={20} className="text-gray-900" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-3 text-center">
                <div className="text-2xl font-bold text-gray-900">3</div>
                <div className="text-xs text-gray-800 mt-1">Дыханий</div>
              </div>
              <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-3 text-center">
                <div className="text-2xl font-bold text-gray-900">12</div>
                <div className="text-xs text-gray-800 mt-1">Минут</div>
              </div>
              <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-3 text-center">
                <div className="text-2xl font-bold text-gray-900">5</div>
                <div className="text-xs text-gray-800 mt-1">Дней</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div>
          <h3 className="text-lg font-bold text-white mb-3 px-1">Быстрые действия</h3>
          <div className="grid grid-cols-4 gap-3">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-card hover:bg-card/80 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-12 h-12 ${action.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>
                  {action.emoji}
                </div>
                <span className="text-xs text-white font-medium">{action.title}</span>
              </button>
            ))}
          </div>
        </div>

        {breathingActive && (
          <Card className="bg-card border-border shadow-2xl animate-scale-in">
            <CardContent className="pt-6 pb-6">
              <div className="flex flex-col items-center gap-6">
                <div className="flex items-center justify-between w-full mb-2">
                  <h3 className="text-xl font-bold text-white">Дыхание 4-4-4</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setBreathingActive(false)}
                    className="text-white"
                  >
                    <Icon name="X" size={20} />
                  </Button>
                </div>
                <div
                  className={`w-40 h-40 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center transition-all duration-[4000ms] shadow-2xl ${
                    breathingPhase === 'inhale'
                      ? 'scale-125'
                      : breathingPhase === 'exhale'
                      ? 'scale-75'
                      : 'scale-100'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-5xl mb-2">🫁</div>
                    <p className="text-lg font-bold text-white">
                      {breathingPhase === 'inhale' && 'Вдох'}
                      {breathingPhase === 'hold' && 'Задержка'}
                      {breathingPhase === 'exhale' && 'Выдох'}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {!breathingActive && (
          <div>
            <h3 className="text-lg font-bold text-white mb-3 px-1">Техники расслабления</h3>
            <div className="space-y-3">
              {psychologyTips.map((tip, index) => (
                <Card
                  key={index}
                  className={`bg-gradient-to-br ${tip.color} border-0 shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => {
                    if (index === 0) startBreathing();
                  }}
                >
                  <CardContent className="pt-4 pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-bold text-white mb-1">{tip.title}</h4>
                        <p className="text-sm text-white/80">{tip.description}</p>
                      </div>
                      <div className="ml-3 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5">
                        <span className="text-xs font-medium text-white">{tip.time}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        <Card className="bg-card border-border shadow-lg">
          <CardHeader>
            <CardTitle className="text-white">Сообщество поддержки</CardTitle>
            <CardDescription className="text-gray-400">
              Поделись опытом с другими школьниками
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { title: 'Страх перед ЕГЭ', replies: 23, emoji: '📖', color: 'bg-blue-500' },
              { title: 'Усталость от учёбы', replies: 15, emoji: '😴', color: 'bg-purple-500' },
              { title: 'Конфликт с родителями', replies: 31, emoji: '👨‍👩‍👦', color: 'bg-pink-500' },
            ].map((topic, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-2xl bg-muted hover:bg-muted/80 transition-colors cursor-pointer"
              >
                <div className={`w-10 h-10 ${topic.color} rounded-xl flex items-center justify-center text-xl shadow-md`}>
                  {topic.emoji}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white text-sm">{topic.title}</h4>
                  <p className="text-xs text-gray-400">{topic.replies} ответов</p>
                </div>
                <Icon name="ChevronRight" size={18} className="text-gray-500" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-pink-500 border-0 shadow-lg">
          <CardContent className="pt-6 pb-6">
            <div className="text-center">
              <div className="text-4xl mb-3">💜</div>
              <h3 className="text-xl font-bold text-white mb-2">Нужна помощь?</h3>
              <p className="text-sm text-white/80 mb-4">
                Поговори с психологом анонимно
              </p>
              <div className="space-y-2">
                <Button className="w-full bg-white text-purple-600 hover:bg-white/90 font-semibold rounded-full">
                  📞 8-800-2000-122
                </Button>
                <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 rounded-full">
                  💬 Онлайн-чат
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <footer className="text-center py-6">
          <p className="text-sm text-gray-400">Антистресс 9-11</p>
          <p className="text-xs text-gray-500 mt-1">Забота о себе — это нормально 💜</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
