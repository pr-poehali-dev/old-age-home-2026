import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      icon: "Home",
      title: "Комфортное проживание",
      description: "Уютные комнаты различных категорий: от стандарта до люкс. Современное оборудование, безопасная среда и домашняя атмосфера.",
      features: ["Одно- и двухместные номера", "Круглосуточный уход", "Медицинский контроль"]
    },
    {
      icon: "Heart",
      title: "Медицинское сопровождение",
      description: "Квалифицированный медицинский персонал обеспечивает заботу о здоровье каждого жильца.",
      features: ["Регулярные осмотры", "Помощь с лекарствами", "Экстренная помощь 24/7"]
    },
    {
      icon: "Sparkles",
      title: "Досуг и культура",
      description: "Насыщенная программа мероприятий для активной и интересной жизни наших подопечных.",
      features: ["Творческие мастерские", "Музыкальные вечера", "Встречи с друзьями"]
    },
    {
      icon: "Coffee",
      title: "Питание",
      description: "Сбалансированное трёхразовое питание с учётом индивидуальных потребностей и предпочтений.",
      features: ["Диетическое меню", "Свежие продукты", "Домашняя кухня"]
    }
  ];

  const galleryImages = [
    {
      url: "https://cdn.poehali.dev/projects/4ff391cc-c9e5-4a0f-af61-39d3aca49678/files/fd78927c-434a-49e7-8b76-66d433b5ab21.jpg",
      title: "Уютная гостиная"
    },
    {
      url: "https://cdn.poehali.dev/projects/4ff391cc-c9e5-4a0f-af61-39d3aca49678/files/54e96d8e-ba03-4168-8c4a-239b1f59fdff.jpg",
      title: "Творческие занятия"
    },
    {
      url: "https://cdn.poehali.dev/projects/4ff391cc-c9e5-4a0f-af61-39d3aca49678/files/9c4ffdea-d974-46d4-9a6b-9d6932a49c3c.jpg",
      title: "Комфортные номера"
    }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Дом Заботы</h1>
            <div className="hidden md:flex gap-6">
              {["home", "services", "gallery", "about", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`transition-colors hover:text-primary ${
                    activeSection === section ? "text-primary font-semibold" : "text-foreground"
                  }`}
                >
                  {section === "home" && "Главная"}
                  {section === "services" && "Услуги"}
                  {section === "gallery" && "Галерея"}
                  {section === "about" && "О нас"}
                  {section === "contact" && "Контакты"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-b from-accent to-background">
        <div className="container mx-auto text-center animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-semibold">Открытие в 2026 году</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Дом, где живёт забота
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Современный дом престарелых с семейной атмосферой, где каждый чувствует себя как дома
          </p>
          <Button size="lg" onClick={() => scrollToSection("contact")} className="text-lg px-8">
            Забронировать место
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексный уход и внимание к каждому жильцу
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-scale-in border-2 hover:border-primary/50" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Галерея</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Посмотрите, как живут наши подопечные
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">О нас</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  <strong className="text-foreground">Дом Заботы</strong> — это современный дом престарелых, который откроет свои двери в 2026 году. Мы создаём пространство, где пожилые люди получают не просто уход, а настоящую семейную заботу и внимание.
                </p>
                <p>
                  Наша миссия — обеспечить достойную и комфортную жизнь людям старшего поколения. Мы верим, что каждый человек заслуживает уважения, тепла и индивидуального подхода.
                </p>
                <div className="grid grid-cols-3 gap-6 pt-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm">Мест для проживания</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm">Медицинский уход</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <div className="text-sm">Забота и внимание</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="p-8 bg-accent/50">
                <h3 className="text-2xl font-bold mb-6">Почему выбирают нас?</h3>
                <div className="space-y-4">
                  {[
                    "Квалифицированный персонал с опытом",
                    "Современное медицинское оборудование",
                    "Разнообразная культурная программа",
                    "Индивидуальный подход к каждому",
                    "Безопасная и комфортная среда",
                    "Вкусное домашнее питание"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name="Check" size={16} className="text-white" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-background to-accent">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Мы ответим на все ваши вопросы и поможем выбрать подходящие условия
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <div className="text-muted-foreground">+7 (927) 165-13-01</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-muted-foreground">info@domzaboty.ru</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <div className="text-muted-foreground">г. Саратов, ул. Рабочая, д. 27</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Режим работы</div>
                    <div className="text-muted-foreground">Ежедневно с 9:00 до 20:00</div>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="p-8 bg-primary text-primary-foreground">
              <h3 className="text-2xl font-bold mb-6">Забронируйте место</h3>
              <p className="mb-6 opacity-90">
                Количество мест ограничено. Оставьте заявку сейчас, чтобы гарантировать место к открытию в 2026 году.
              </p>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-sm opacity-75 mb-2">Специальное предложение</div>
                  <div className="text-3xl font-bold">-20%</div>
                  <div className="text-sm opacity-90 mt-1">при ранней брони</div>
                </div>
                <Button size="lg" variant="secondary" className="w-full">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на экскурсию
                </Button>
                <div className="text-sm opacity-75 text-center">
                  Позвоните нам или оставьте заявку онлайн
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Дом Заботы</h3>
              <p className="opacity-80">
                Современный дом престарелых с семейной атмосферой
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <div className="space-y-2">
                {["Главная", "Услуги", "Галерея", "О нас", "Контакты"].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToSection(["home", "services", "gallery", "about", "contact"][idx])}
                    className="block opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 opacity-80">
                <div>+7 (927) 165-13-01</div>
                <div>info@domzaboty.ru</div>
                <div>г. Саратов, ул. Рабочая, д. 27</div>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center opacity-60">
            <p>&copy; 2024-2026 Дом Заботы. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;