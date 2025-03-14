function App() {
  return (
    <div className="min-h-screen bg-white-light p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Font Display Section */}
        <section>
          <h1 className="text-[144px] leading-none text-navy font-medium">Rubik</h1>
          <div className="mt-4 text-grey">
            <div className="grid grid-cols-[repeat(26,minmax(0,1fr))] gap-1">
              {/* Uppercase letters */}
              {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => (
                <span key={`upper-${letter}`}>{letter}</span>
              ))}
            </div>
            <div className="grid grid-cols-[repeat(26,minmax(0,1fr))] gap-1">
              {/* Lowercase letters */}
              {'abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => (
                <span key={`lower-${letter}`}>{letter}</span>
              ))}
            </div>
            <div className="grid grid-cols-[repeat(26,minmax(0,1fr))] gap-1">
              {/* Numbers and symbols */}
              {'1234567890!@#$%^&*()_+'.split('').map((char) => (
                <span key={`char-${char}`}>{char}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Typography Examples */}
        <section className="space-y-8">
          {/* Display */}
          <div className="flex items-baseline gap-4">
            <div className="w-32">
              <p className="text-grey text-sm">Display</p>
              <p className="text-grey-light text-xs">Rubik Medium</p>
              <p className="text-grey-light text-xs">144px</p>
              <p className="text-grey-light text-xs">100% Line Height</p>
            </div>
            <div className="text-[144px] leading-none text-navy font-medium">Lorem</div>
          </div>

          {/* Heading L (Bold) */}
          <div className="flex items-baseline gap-4">
            <div className="w-32">
              <p className="text-grey text-sm">Heading L (Bold)</p>
              <p className="text-grey-light text-xs">Rubik Medium</p>
              <p className="text-grey-light text-xs">64px</p>
              <p className="text-grey-light text-xs">100% Line Height</p>
            </div>
            <div className="text-heading-l text-navy">Lorem ipsum</div>
          </div>

          {/* Heading L (Regular) */}
          <div className="flex items-baseline gap-4">
            <div className="w-32">
              <p className="text-grey text-sm">Heading L (Regular)</p>
              <p className="text-grey-light text-xs">Rubik Regular</p>
              <p className="text-grey-light text-xs">64px</p>
              <p className="text-grey-light text-xs">100% Line Height</p>
            </div>
            <div className="text-heading-l font-normal text-navy">Lorem ipsum</div>
          </div>

          {/* Heading M */}
          <div className="flex items-baseline gap-4">
            <div className="w-32">
              <p className="text-grey text-sm">Heading M</p>
              <p className="text-grey-light text-xs">Rubik Medium</p>
              <p className="text-grey-light text-xs">36px</p>
              <p className="text-grey-light text-xs">100% Line Height</p>
            </div>
            <div className="text-heading-m text-navy">Lorem ipsum dolor</div>
          </div>

          {/* Heading S */}
          <div className="flex items-baseline gap-4">
            <div className="w-32">
              <p className="text-grey text-sm">Heading S</p>
              <p className="text-grey-light text-xs">Rubik Medium</p>
              <p className="text-grey-light text-xs">28px</p>
              <p className="text-grey-light text-xs">100% Line Height</p>
            </div>
            <div className="text-heading-s text-navy">Lorem ipsum dolor</div>
          </div>

          {/* Body M */}
          <div className="flex items-start gap-4">
            <div className="w-32">
              <p className="text-grey text-sm">Body M</p>
              <p className="text-grey-light text-xs">Rubik Regular</p>
              <p className="text-grey-light text-xs">12px</p>
              <p className="text-grey-light text-xs">150% Line Height</p>
            </div>
            <div className="text-body-m text-navy max-w-xl">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
            </div>
          </div>

          {/* Body S */}
          <div className="flex items-start gap-4">
            <div className="w-32">
              <p className="text-grey text-sm">Body S</p>
              <p className="text-grey-light text-xs">Rubik Regular Italic</p>
              <p className="text-grey-light text-xs">12px</p>
              <p className="text-grey-light text-xs">150% Line Height</p>
            </div>
            <div className="text-body-s italic text-navy max-w-xl">
              Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisi. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
