
interface HeadingProps{
    title: string,
    subtitle: string,
    para: string
}

export default function Heading({title,subtitle,para}:HeadingProps) {
  return (
    <div className="text-center space-y-4">
      <h2 className="text-[#FF3811]  text-xl font-bold">{title}</h2>
      <p className="md:text-5xl text-3xl text-[#151515] font-bold">
        {subtitle}
      </p>
      <p className="text-[#737373] text-base" dangerouslySetInnerHTML={{ __html: para }}/>
    </div>
  );
}
