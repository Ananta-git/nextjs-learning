import Link from 'next/link';
import { DisplayOptions, FeatureItem } from '@/types';

interface FeatureSectionProps extends DisplayOptions {
    features: FeatureItem[]
}

export default function FeaturesSection({
    features,
    showAll =false,
    maxDisplay = 4
    }: FeatureSectionProps){
    //Show only limited features if not showing all
    const displayedFeatures = showAll ? features : features.slice(0, maxDisplay)
    const hasMoreFeatures = features.length > maxDisplay && !showAll
    return(
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl font-bold mb-12 text-gray-800">
                        Why Choose Bhrikuti School?
                    </h2>
                    {/*Show View All button oly when there are more features*/}
                    {hasMoreFeatures&&(
                            <Link 
                                href="/features"
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                                >
                                View All Features
                            </Link>
                        )}
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {displayedFeatures.map((feature, index) => (
                        <div 
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-200">
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
                {/* Show back button when viewing all features*/}
                {showAll &&(
                    <div className="text-center mt-8">
                        <Link href="/" className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-200">
                        Back to Home
                        </Link>
                    </div>
                )}
            </div>
        </section>

        )
    }