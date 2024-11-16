import Image from 'next/image';

export default function Hero() {
  return (
    <div className="mb-16 flex flex-col items-center">
      <div className="w-[70%] flex flex-row items-start gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-medium tracking-tight mb-4 text-neutral-800 dark:text-neutral-200">
            Software Developer
          </h2>
          <p className="text-neutral-800 dark:text-neutral-200 mb-12">
            Passionate about leveraging technology to solve complex problems in
            sports analytics. With expertise in full-stack development and data
            science, I specialize in transforming complex data into actionable
            insights. Whether it&apos;s building intuitive dashboards or
            developing predictive models, I&apos;m committed to creating
            solutions that make a real impact in the world of sports technology.
          </p>
        </div>
        <div className="w-48 h-48">
          <Image
            src="/photos/profile-photo.png"
            alt="Profile picture"
            width={192}
            height={192}
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
