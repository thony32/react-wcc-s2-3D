import { useProgress } from '@react-three/drei';

export function Loading(props: { progress?: number }) {
    const { progress } = useProgress();
    console.log(props);
    return (
        <div className="h-screen flex justify-center items-center fortnite text-2xl sm:text-5xl">
            <div className='space-y-4'>
                <div className='flex justify-center'>
                    <label className='text-center'>Miandrasa kely oh ! {progress.toFixed(0)}%</label>
                </div>
                <div className='flex items-center justify-center gap-3 animate-pulse'>
                    <svg className='w-4 stroke-current' viewBox="0 0 24 24" fill="none">
                        <path
                            d="M12 19.5C12 20.8807 10.8807 22 9.5 22C8.11929 22 7 20.8807 7 19.5C7 18.1193 8.11929 17 9.5 17C10.8807 17 12 18.1193 12 19.5Z"
                            stroke-width="1.5" />
                        <path
                            d="M22 17.5C22 18.8807 20.8807 20 19.5 20C18.1193 20 17 18.8807 17 17.5C17 16.1193 18.1193 15 19.5 15C20.8807 15 22 16.1193 22 17.5Z"
                            stroke-width="1.5" />
                        <path d="M22 8L12 12" stroke-width="1.5" stroke-linecap="round" />
                        <path
                            d="M14.4556 5.15803L14.7452 5.84987L14.4556 5.15803ZM16.4556 4.32094L16.1661 3.62909L16.4556 4.32094ZM21.1081 3.34059L20.6925 3.96496L20.6925 3.96496L21.1081 3.34059ZM12.75 19.0004V8.84787H11.25V19.0004H12.75ZM22.75 17.1542V8.01078H21.25V17.1542H22.75ZM14.7452 5.84987L16.7452 5.01278L16.1661 3.62909L14.1661 4.46618L14.7452 5.84987ZM22.75 8.01078C22.75 6.67666 22.752 5.59091 22.6304 4.76937C22.5067 3.93328 22.2308 3.18689 21.5236 2.71622L20.6925 3.96496C20.8772 4.08787 21.0473 4.31771 21.1466 4.98889C21.248 5.67462 21.25 6.62717 21.25 8.01078H22.75ZM16.7452 5.01278C18.0215 4.47858 18.901 4.11263 19.5727 3.94145C20.2302 3.77391 20.5079 3.84204 20.6925 3.96496L21.5236 2.71622C20.8164 2.24554 20.0213 2.2792 19.2023 2.48791C18.3975 2.69298 17.3967 3.114 16.1661 3.62909L16.7452 5.01278ZM12.75 8.84787C12.75 8.18634 12.751 7.74991 12.7875 7.41416C12.822 7.09662 12.8823 6.94006 12.9594 6.8243L11.7106 5.99325C11.4527 6.38089 11.3455 6.79864 11.2963 7.25218C11.249 7.68752 11.25 8.21893 11.25 8.84787H12.75ZM14.1661 4.46618C13.5859 4.70901 13.0953 4.91324 12.712 5.12494C12.3126 5.34549 11.9686 5.60562 11.7106 5.99325L12.9594 6.8243C13.0364 6.70855 13.1575 6.59242 13.4371 6.438C13.7328 6.27473 14.135 6.10528 14.7452 5.84987L14.1661 4.46618Z"
                            fill="#1C274C" />
                        <path d="M7 11V6.5V2" stroke-width="1.5" stroke-linecap="round" />
                        <circle cx="4.5" cy="10.5" r="2.5" stroke-width="1.5" />
                        <path d="M10 5C8.75736 5 7 4.07107 7 2" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                    <label className='text-sm'>Alefaso ny feo mba ampahafinaritra</label>
                    <svg className='w-4 stroke-current' viewBox="0 0 24 24" fill="none">
                        <path
                            d="M18.9999 16L19.8692 4.26538C19.9448 3.24523 19.275 2.31876 18.2826 2.07066C17.0656 1.76642 15.8548 2.58884 15.689 3.83225L15 9"
                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8 11L7.28683 6.72097C7.12131 5.72788 6.26208 5 5.25529 5C4.0442 5 3.09454 6.03991 3.20418 7.24603L4 16"
                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 13V11.5C12 10.3954 11.1046 9.5 10 9.5C8.89543 9.5 8 10.3954 8 11.5V15"
                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16 13V11C16 9.89543 15.1046 9 14 9C12.8954 9 12 9.89543 12 11V13" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M19 16C18.4643 20 15.6421 22 11.5 22C7.35786 22 4 20 4 16" stroke-width="1.5" />
                        <path d="M13.6923 17H11C9.89543 17 9 16.1046 9 15C9 13.8954 9.89543 13 11 13L15 13C17.2091 13 19.5 15 18.5 18"
                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    )
}
