import Image from 'next/image';

export default function Hero() {
  return (
    <div className="mb-32 flex flex-col items-center">
      <div className="w-[50%] max-w-xl flex flex-col items-center gap-12">
        <div className="w-full">
          <div className="flex justify-center mb-4">
            <h2 className="text-3xl font-space-grotesk font-medium tracking-tight text-neutral-800 dark:text-neutral-200 w-fit">
              Software Developer
            </h2>
          </div>
          <div className="pl-0">
            <p className="font-inter text-neutral-800 dark:text-neutral-200 leading-relaxed">
              Passionate about leveraging technology to solve complex problems
              in sports analytics. With expertise in full-stack development and
              data science, I specialize in transforming complex data into
              actionable insights.
            </p>
          </div>
        </div>
        <div className="w-48 h-48 self-center">
          <Image
            src="/photos/profile-photo.png"
            alt="Profile picture"
            width={192}
            height={192}
            className="rounded-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}
