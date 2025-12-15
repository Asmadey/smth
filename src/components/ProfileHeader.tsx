export default function ProfileHeader() {
  return (
    <div className="p-8 text-center mb-6">
      {/* Avatar with glass frame */}
      <div className="relative inline-block mb-4">
        <div className="glass-container rounded-full p-1.5 inline-block">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple p-1">
            <img
              src="https://ihbzndymkizrpeoawojd.supabase.co/storage/v1/object/sign/Mini%20Site/1.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85M2IwNGYzYy0zY2RiLTQ4NjAtYWFmYy02MGVjMDYzZTNmYzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJNaW5pIFNpdGUvMS5qcGVnIiwiaWF0IjoxNzY1NzUzODg1LCJleHAiOjIwODExMTM4ODV9.cKZEJmb8_ARoTGBvbdWYLTGaP9P_Ef8u8ARoboJZ4Oc"
              alt="Прошинский Владислав"
              className="w-full h-full rounded-full object-cover bg-white"
            />
          </div>
        </div>
      </div>

      {/* Name */}
      <h1 className="text-3xl font-bold text-text-primary mb-2">
        Прошинский Владислав
      </h1>

      {/* Bio */}
      <p className="text-base text-text-secondary max-w-md mx-auto leading-relaxed">
        Эксперт по внедрению ИИ в бизнес-процессы. Помогаю компаниям и специалистам
        эффективно использовать искусственный интеллект для решения задач.
      </p>
    </div>
  );
}
