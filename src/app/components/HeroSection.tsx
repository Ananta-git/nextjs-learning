export default function HeroSection() {
    return (
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Welcome to Bhrikuti Secondary School
                </h1>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                    Providing quality education and shaping future leaders since 2024 Bs.
                    Where excellence is a tradition and learning in a journey.
                </p>
                <div className="space-x-4">
                    <button className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-200">
                        Apply Now
                    </button>
                    <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition duration-200">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
        
    )
}