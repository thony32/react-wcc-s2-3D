import { useProgress } from '@react-three/drei';

export function Loading(props: { progress?: number }) {
    const { progress } = useProgress();
    console.log(props);
    return (
        <div className="h-full flex items-center justify-center">
            <div className='text-center animate-pulse'>
                <h1 className='text-3xl text-blue-600'>Loading</h1>
                <span className='text-2xl text-blue-600'>{progress.toFixed(0)}%</span>
            </div>
        </div>
    )
}
