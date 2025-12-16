export default function ProfileHeader() {
  return (
    <div className="text-center mb-8 pt-8">
      {/* Avatar with white border */}
      <div className="relative inline-block mb-6">
        <div className="w-32 h-32 rounded-full bg-white p-2 shadow-lg">
          <img
            src="https://ihbzndymkizrpeoawojd.supabase.co/storage/v1/object/sign/Mini%20Site/1.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85M2IwNGYzYy0zY2RiLTQ4NjAtYWFmYy02MGVjMDYzZTNmYzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJNaW5pIFNpdGUvMS5qcGVnIiwiaWF0IjoxNzY1NzUzODg1LCJleHAiOjIwODExMTM4ODV9.cKZEJmb8_ARoTGBvbdWYLTGaP9P_Ef8u8ARoboJZ4Oc"
            alt="Прошинский Владислав"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>

      {/* Name */}
      <h1 className="text-3xl font-bold text-gray-900 mb-3">
        Прошинский Владислав
      </h1>

      {/* Bio */}
      <p className="text-base text-gray-600 max-w-md mx-auto leading-relaxed px-4">
        Эксперт по внедрению ИИ в бизнес-процессы. Помогаю компаниям и специалистам
        эффективно использовать искусственный интеллект для решения задач.
      </p>
    </div>
  );
}
