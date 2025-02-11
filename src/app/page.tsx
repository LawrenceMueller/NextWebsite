"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-4">
      <div className="relative w-full max-w-md">
        <div>
          <div>
            <div className="text-center">
              <svg data-v-fde0c5aa=""  viewBox="0 0 300 300"><defs data-v-fde0c5aa=""></defs><rect data-v-fde0c5aa="" fill="#EFF7FE" x="0" y="0" width="300px" height="300px"></rect><defs data-v-fde0c5aa=""></defs><g data-v-fde0c5aa="" id="60daf358-fb40-47e0-8713-137ac07ee50b" fill="#08374E" transform="matrix(6.54356983313418,0,0,6.54356983313418,22.23679799398453,178.4671196295307)"><path d="M3.61 12.29L3.61 3.85L0.31 3.85L0.31 2.69L8.25 2.69L8.25 3.85L4.94 3.85L4.94 12.29L3.61 12.29ZM11.06 12.46Q9.28 12.46 8.41 11.52Q7.55 10.58 7.55 8.61L7.55 8.61Q7.55 6.64 8.41 5.70Q9.28 4.76 11.06 4.76L11.06 4.76Q12.66 4.76 13.45 5.61Q14.24 6.45 14.24 8.33L14.24 8.33L14.24 8.95L8.82 8.95Q8.89 10.22 9.43 10.83Q9.97 11.44 11.06 11.44L11.06 11.44Q11.94 11.44 12.49 11.03Q13.03 10.63 13.03 9.79L13.03 9.79L14.24 9.79Q14.24 11.07 13.35 11.77Q12.46 12.46 11.06 12.46L11.06 12.46ZM8.85 7.92L12.95 7.92Q12.95 5.78 11.06 5.78L11.06 5.78Q10.01 5.78 9.48 6.29Q8.96 6.79 8.85 7.92L8.85 7.92ZM17.39 12.45Q16.63 12.45 16.28 12.00Q15.93 11.55 15.93 10.89L15.93 10.89L15.93 5.95L15.04 5.95L15.04 4.93L15.95 4.93L16.21 2.88L17.16 2.88L17.16 4.93L18.41 4.93L18.41 5.95L17.16 5.95L17.16 10.78Q17.16 11.44 17.78 11.44L17.78 11.44L18.41 11.44L18.41 12.25Q18.23 12.33 17.93 12.39Q17.64 12.45 17.39 12.45L17.39 12.45ZM19.61 12.29L19.61 2.17L20.85 2.17L20.85 5.75L20.94 5.75Q21.71 4.76 23.27 4.76L23.27 4.76Q25.56 4.76 25.56 7.27L25.56 7.27L25.56 12.29L24.33 12.29L24.33 7.35Q24.33 6.47 23.94 6.13Q23.55 5.78 22.81 5.78L22.81 5.78Q22.27 5.78 21.83 6.04Q21.38 6.30 21.11 6.79Q20.85 7.28 20.85 7.94L20.85 7.94L20.85 12.29L19.61 12.29ZM30.52 12.46Q28.74 12.46 27.87 11.52Q27.01 10.58 27.01 8.61L27.01 8.61Q27.01 6.64 27.87 5.70Q28.74 4.76 30.52 4.76L30.52 4.76Q32.12 4.76 32.91 5.61Q33.70 6.45 33.70 8.33L33.70 8.33L33.70 8.95L28.28 8.95Q28.35 10.22 28.89 10.83Q29.43 11.44 30.52 11.44L30.52 11.44Q31.40 11.44 31.95 11.03Q32.49 10.63 32.49 9.79L32.49 9.79L33.70 9.79Q33.70 11.07 32.81 11.77Q31.92 12.46 30.52 12.46L30.52 12.46ZM28.31 7.92L32.41 7.92Q32.41 5.78 30.52 5.78L30.52 5.78Q29.47 5.78 28.94 6.29Q28.42 6.79 28.31 7.92L28.31 7.92ZM35.18 12.29L35.18 4.93L36.12 4.93L36.26 6.03L36.34 6.03Q36.55 5.49 36.97 5.12Q37.39 4.76 38.08 4.76L38.08 4.76Q38.32 4.76 38.51 4.81Q38.70 4.86 38.74 4.87L38.74 4.87L38.74 6.06L38.22 6.06Q37.44 6.06 36.92 6.52Q36.41 6.97 36.41 7.94L36.41 7.94L36.41 12.29L35.18 12.29Z"></path></g><defs data-v-fde0c5aa=""><linearGradient data-v-fde0c5aa="" gradientTransform="rotate(25)" id="922241e1-8b09-4ca1-aa35-20c6f5a2c2cb" x1="0%" y1="0%" x2="100%" y2="0%"><stop data-v-fde0c5aa="" offset="0%" stopColor="#0D7CE9" stopOpacity="1"></stop><stop data-v-fde0c5aa="" offset="100%" stopColor="#15CFF1" stopOpacity="1"></stop></linearGradient></defs><g data-v-fde0c5aa="" id="da4cecb8-c0b4-4662-9bae-3b5529c11a55" stroke="none" fill="url(#922241e1-8b09-4ca1-aa35-20c6f5a2c2cb)" transform="matrix(4.208333333333333,0,0,4.208333333333333,82.66666666666667,40)"><path d="M15.965 16.258l.707-.707 10.39 10.39-.707.707z"></path><path d="M4.935 26.357L26.018 5.274l.707.707L5.642 27.065z"></path><path d="M31 1v4.194h-4.194V1H31m1-1h-6.194v6.194H32V0zM31 26.806V31h-4.194v-4.194H31m1-1h-6.194V32H32v-6.194zM5.194 26.806V31H1v-4.194h4.194m1-1H0V32h6.194v-6.194z"></path></g></svg>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-6 text-center text-lg font-semibold text-gray-900">
        Stay in touch with people you like! Or like dont, I dont care
      </p>

      <div className="mt-6 w-full max-w-md">
        <button onClick={() => router.push("/login")} className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700">
          Sign in
        </button>
        <button onClick={() => router.push("/register")} className="w-full mt-3 border border-teal-600 text-teal-600 py-3 rounded-lg hover:bg-teal-50">
          Create an account
        </button>
      </div>
    </div>
  );
}
