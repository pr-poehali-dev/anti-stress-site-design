import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [breathingActive, setBreathingActive] = useState(false);
  const [breathingPhase, setBreathingPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');

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

  const meditations = [
    { title: 'Утреннее спокойствие', duration: '5 мин', emoji: '🌅', category: 'Утро' },
    { title: 'Перед экзаменом', duration: '3 мин', emoji: '📚', category: 'Учёба' },
    { title: 'Вечернее расслабление', duration: '10 мин', emoji: '🌙', category: 'Вечер' },
    { title: 'Быстрая перезагрузка', duration: '2 мин', emoji: '⚡', category: 'Энергия' },
  ];

  const psychologyTips = [
    {
      title: 'Техника 5-4-3-2-1',
      description: 'Назови 5 вещей, которые видишь, 4 — которые слышишь, 3 — которые чувствуешь, 2 — которые пахнут, 1 — которую ощущаешь на вкус',
      emoji: '🧘',
    },
    {
      title: 'Метод Помодоро',
      description: '25 минут учёбы, 5 минут отдыха. После 4 циклов — большой перерыв 15-30 минут',
      emoji: '🍅',
    },
    {
      title: 'Дневник эмоций',
      description: 'Записывай свои чувства каждый день. Это помогает понять себя и снизить тревожность',
      emoji: '📝',
    },
    {
      title: 'Прогрессивная релаксация',
      description: 'Напрягай и расслабляй группы мышц по очереди: от лица до ног',
      emoji: '💆',
    },
  ];

  const communityTopics = [
    { title: 'Страх перед ЕГЭ', replies: 23, emoji: '📖' },
    { title: 'Как справиться с усталостью', replies: 15, emoji: '😴' },
    { title: 'Конфликт с родителями', replies: 31, emoji: '👨‍👩‍👦' },
    { title: 'Тревога перед олимпиадой', replies: 12, emoji: '🏆' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
      <nav className="border-b border-purple-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-purple-600">Антистресс 9-11</h1>
            <div className="flex gap-6">
              <a href="#meditations" className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">
                Медитации
              </a>
              <a href="#breathing" className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">
                Дыхание
              </a>
              <a href="#tips" className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">
                Советы
              </a>
              <a href="#community" className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">
                Сообщество
              </a>
              <a href="#contacts" className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">
                Контакты
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-6 text-6xl">🌸</div>
          <h2 className="text-5xl font-bold mb-6 text-gray-800">
            Твоё пространство спокойствия
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-serif">
            Подготовка к экзаменам, учёба, отношения — всё это может вызывать стресс.
            Здесь ты найдёшь инструменты, которые помогут тебе успокоиться и восстановить силы.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="rounded-full">
              <Icon name="Play" size={20} className="mr-2" />
              Начать медитацию
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              <Icon name="Wind" size={20} className="mr-2" />
              Дыхательное упражнение
            </Button>
          </div>
        </div>
      </section>

      <section id="breathing" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Дыхательные упражнения
          </h3>
          <Card className="border-2 border-purple-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Дыхание 4-4-4</CardTitle>
              <CardDescription>
                Техника глубокого дыхания для быстрого успокоения
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center gap-8">
                <div
                  className={`w-48 h-48 rounded-full bg-gradient-to-br from-purple-300 to-blue-300 flex items-center justify-center transition-all duration-4000 ${
                    breathingActive && breathingPhase === 'inhale'
                      ? 'scale-125'
                      : breathingActive && breathingPhase === 'exhale'
                      ? 'scale-75'
                      : 'scale-100'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-5xl mb-2">🫁</div>
                    {breathingActive && (
                      <p className="text-lg font-semibold text-gray-700">
                        {breathingPhase === 'inhale' && 'Вдох'}
                        {breathingPhase === 'hold' && 'Задержка'}
                        {breathingPhase === 'exhale' && 'Выдох'}
                      </p>
                    )}
                  </div>
                </div>
                <Button
                  size="lg"
                  onClick={() => {
                    if (breathingActive) {
                      setBreathingActive(false);
                    } else {
                      startBreathing();
                    }
                  }}
                  className="rounded-full"
                >
                  {breathingActive ? 'Остановить' : 'Начать упражнение'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="meditations" className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Медитации для школьников
          </h3>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="morning">Утро</TabsTrigger>
              <TabsTrigger value="study">Учёба</TabsTrigger>
              <TabsTrigger value="evening">Вечер</TabsTrigger>
              <TabsTrigger value="energy">Энергия</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-6">
                {meditations.map((meditation, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-purple-100"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-4xl">{meditation.emoji}</span>
                        <div>
                          <CardTitle className="text-xl">{meditation.title}</CardTitle>
                          <CardDescription>{meditation.duration}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full rounded-full">
                        <Icon name="Play" size={16} className="mr-2" />
                        Начать
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="tips" className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Советы психолога
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {psychologyTips.map((tip, index) => (
              <Card
                key={index}
                className="border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <span className="text-4xl">{tip.emoji}</span>
                    <div>
                      <CardTitle className="text-xl mb-2">{tip.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {tip.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="community" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Сообщество поддержки
          </h3>
          <Card className="border-2 border-green-100">
            <CardHeader>
              <CardTitle>Обсуждения</CardTitle>
              <CardDescription>
                Делись опытом и получай поддержку от сверстников
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {communityTopics.map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-white hover:bg-green-50 transition-colors cursor-pointer border border-green-100"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{topic.emoji}</span>
                      <div>
                        <h4 className="font-semibold text-gray-800">{topic.title}</h4>
                        <p className="text-sm text-gray-500">{topic.replies} ответов</p>
                      </div>
                    </div>
                    <Icon name="ChevronRight" size={20} className="text-gray-400" />
                  </div>
                ))}
              </div>
              <Button className="w-full mt-6 rounded-full" variant="outline">
                <Icon name="Plus" size={20} className="mr-2" />
                Создать новую тему
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8 text-gray-800">
            Нужна помощь?
          </h3>
          <Card className="border-2 border-purple-200">
            <CardHeader>
              <CardTitle className="text-2xl">Контакты психологов</CardTitle>
              <CardDescription>
                Если тебе нужна профессиональная помощь
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">📞 Горячая линия для подростков</h4>
                <p className="text-gray-600">8-800-2000-122 (бесплатно, круглосуточно)</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">💬 Онлайн-чат с психологом</h4>
                <Button className="mt-2 rounded-full">Начать чат</Button>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">📧 Написать психологу</h4>
                <p className="text-gray-600">support@antistress911.ru</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-white border-t border-purple-200 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p className="mb-2">Антистресс 9-11 — твоё пространство спокойствия</p>
          <p className="text-sm">Забота о психическом здоровье — это нормально 💜</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
