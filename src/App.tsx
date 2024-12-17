import LoginPage from "./pages/login";
import { FormProvider, useForm } from "react-hook-form";

function App() {
  const formMethods = useForm();
  return (
    <FormProvider {...formMethods}>
      <LoginPage />
    </FormProvider>
  );
}

export default App;
