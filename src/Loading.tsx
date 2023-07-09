import { useProgress } from '@react-three/drei';

export function Loading(props: { progress?: number }) {
    const { progress } = useProgress();
    console.log(props);
    return (
        <div className="h-screen flex justify-center items-center fortnite text-5xl">
            Chargement {progress.toFixed(0)}%
        </div>
    )
}
