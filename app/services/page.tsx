import Image from "next/image"

export default function Services() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center">Our Services</h1>

      <section id="sound" className="flex flex-col md:flex-row items-center gap-8">
        <Image src="/sound-equipment.jpg" alt="Sound Equipment" width={400} height={300} className="rounded-lg" />
        <div>
          <h2 className="text-2xl font-semibold mb-4">Sound Equipment</h2>
          <p>
            We offer top-of-the-line sound equipment for events of all sizes. Our inventory includes professional-grade
            speakers, mixers, and amplifiers to ensure crystal-clear audio for your event.
          </p>
        </div>
      </section>

      <section id="dj" className="flex flex-col md:flex-row-reverse items-center gap-8">
        <Image src="/DJ-Services.jpg" alt="DJ Services" width={400} height={300} className="rounded-lg" />
        <div>
          <h2 className="text-2xl font-semibold mb-4">DJ Services</h2>
          <p>
            Our experienced DJs know how to read the crowd and keep the party going. We offer customized playlists and
            state-of-the-art equipment to create the perfect atmosphere for your event.
          </p>
        </div>
      </section>

      <section id="lighting" className="flex flex-col md:flex-row items-center gap-8">
        <Image src="/lighting.jpg" alt="Lighting" width={400} height={300} className="rounded-lg" />
        <div>
          <h2 className="text-2xl font-semibold mb-4">Lighting</h2>
          <p>
            Set the mood with our professional lighting services. From elegant uplighting for weddings to dynamic stage
            lighting for concerts, we have the right equipment to illuminate your event.
          </p>
        </div>
      </section>

      <section id="microphones" className="flex flex-col md:flex-row-reverse items-center gap-8">
        <Image src="/microphones.jpg" alt="Microphones" width={400} height={300} className="rounded-lg" />
        <div>
          <h2 className="text-2xl font-semibold mb-4">Microphones</h2>
          <p>
            We provide a variety of high-quality microphones suitable for speeches, performances, and conferences. Our
            selection includes wireless handheld mics, lavalier mics, and podium mics.
          </p>
        </div>
      </section>
    </div>
  )
}
