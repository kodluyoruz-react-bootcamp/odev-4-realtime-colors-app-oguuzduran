import { ColorProvider } from './contexts/ColorContext';
import Home from './components/Home';
function App() {
	return (
		<ColorProvider>
			<Home />
		</ColorProvider>
	);
}

export default App;
