import { useEffect} from 'react';
import Profile from '../shared/windows/profile.window';
import useModalStore from '../store/modal.store';
import { windowList } from '../shared/keys/windowList';
import userService from '../shared/services/user.service';
import MainMenu from "../shared/components/menu.component";
import useTreeStore from "../store/tree.store";
function AboutUs() {
  
  const modalStatus = useModalStore((state) => state.isOpen);
  const window = useModalStore((state) => state.window);
  const isAuth = userService.isAuthenticated();
  const [tree, node] = [useTreeStore((state) => state.tree), useTreeStore((state) => state.node)];
  const getTree = useTreeStore((state)=>state.getTree);
  const treeExist = !!tree;
  useEffect(()=>{
    const fetchTree = async (id)=>{
        await getTree(id);
    }
    if(treeExist){
      fetchTree(localStorage.getItem('TREE_ID'));
    }
  },[])

  console.log(tree)
  return (
      <>
      <MainMenu/>
      {!!localStorage.getItem('TREE_ID') && modalStatus && window === windowList.profileWindow && isAuth && <Profile />}
        <div className="min-h-screen bg-[#FEFFF1] py-5 text-brown font-comfortaa">
          
          <div className="bg-[#FEFFF1] py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl font-extrabold text-brown sm:text-5xl sm:tracking-tight lg:text-6xl">
                  Про AncTree
                </h1>
                <p className="mt-5 max-w-xl mx-auto text-xl text-brown">
                  З'єднуємо родини, зберігаємо спогади та будуємо спадщину разом.
                </p>
              </div>
            </div>
          </div>
          
          <div className="py-10 bg-[#FEFFF1] overflow-hidden flex px-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="items-center">
                <div>
                  <h2 className="text-3xl font-extrabold text-brown sm:text-4xl">
                    Наша Історія
                  </h2>
                  <div className="mt-3 text-lg text-brown space-y-4">
                    <p>
                      Кожен з нас має велику та унікальну, переповнену переживаннями, 
                      історію власної родини, що поступово втрачає деталі. Раніше основними 
                      джерелами інформації про предків були архіви та церковні книги, але з 
                      плином часу ми втратили величезну кількість документів.
                    </p>
                    <p>
                      Зараз більшість інформації про рідню ми можемо дізнатися від бабусь та 
                      дідусів, що ще пам'ятають розповіді своїх батьків, але з бігом часу ми 
                      можемо втратити можливість ще раз послухати про рідню.
                    </p>
                    <p>
                      Тому зараз є неймовірно важливим записати та зберегти історію своєї 
                      родини, щоб не втратити власні витоки.
                    </p>
                  </div>
                </div>
                <div className="mt-10 lg:mt-0">
                  <div className="relative aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="items-center">
                <div className="lg:order-2">
                  <h2 className="text-3xl font-extrabold text-brown sm:text-4xl">
                    Наша Місія
                  </h2>
                  <div className="mt-3 text-lg text-brown space-y-4">
                    <p>
                      Метою дослідження є створення веб-застосунку для реалізації візуального 
                      родового дерева, що дозволяє записувати основні дані та історії з життя 
                      сім'ї та шукати свою рідню за спільним предком між іншими користувачами.
                    </p>
                    <p>
                      Основні функції AncTree:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Створення вузлів</strong> для родового дерева</li>
                      <li><strong>Додання інформації</strong> про кожного предка у вузол дерева</li>
                      <li><strong>Пошук рідні</strong> за спільним предком</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-10 lg:mt-0 lg:order-1">
                  <div className="relative aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="py-16 bg-[#FEFFF1]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <h2 className="text-3xl font-extrabold text-brown sm:text-4xl">
                  Наша Команда
                </h2>
                <p className="mt-4 max-w-2xl text-xl text-brown lg:mx-auto">
                  Віддані фахівці, які допомагають вам відкривати та зберігати історію вашої родини.
                </p>
              </div>
              
              <div className="mt-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {/* Team Member 1 */}
                  <div className="bg-tree rounded-lg p-6 shadow-sm">
                    <div className="flex flex-col items-center">
                      <div className="flex justify-center h-24 w-24 rounded-full overflow-hidden bg-cream items-center">
                          <span className="text-lime-600 font-bold text-6xl">Я</span>
                      </div>
                      <h3 className="mt-4 text-xl font-medium text-brown0">Ярослав Балан</h3>
                      <p className="text-brown">Front-end Developer</p>
                      <p className="mt-3 text-brown text-center">
                        Відповідає за розробку користувацького інтерфейсу та взаємодію з користувачем.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-tree rounded-lg p-6 shadow-sm">
                    <div className="flex flex-col items-center">
                      <div className="flex justify-center h-24 w-24 rounded-full overflow-hidden bg-cream items-center">
                          <span className="text-indigo-400 font-bold text-6xl">М</span>
                      </div>
                      <h3 className="mt-4 text-xl font-medium text-brown">Максим Іванишен</h3>
                      <p className="text-brown">Back-end DevOps</p>
                      <p className="mt-3 text-brown text-center">
                        Розробник серверної частини та відповідає за розгортання і підтримку системи.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-tree rounded-lg p-6 shadow-sm">
                    <div className="flex flex-col items-center">
                      <div className="flex justify-center h-24 w-24 rounded-full overflow-hidden bg-cream items-center">
                          <span className="text-rose-400 font-bold text-6xl">Я</span>
                      </div>
                      <h3 className="mt-4 text-xl font-medium text-brown">Яна Рудик</h3>
                      <p className="text-brown">UX/UI Designer</p>
                      <p className="mt-3 text-brown text-center">
                        Створює інтуїтивно зрозумілий та естетично привабливий дизайн застосунку.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="py-16 bg-[#FEFFF1]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <h2 className="text-3xl font-extrabold text-brown sm:text-4xl">
                  Технології
                </h2>
                <p className="mt-4 max-w-2xl text-xl text-brown lg:mx-auto">
                  Сучасний стек технологій для створення надійного та зручного застосунку.
                </p>
              </div>
              
              <div className="mt-10">
                <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-tree text-white">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-brown">Серверна частина</h3>
                      <p className="mt-2 text-base text-brown">
                        Для створення серверної частини застосунку використано мову програмування TypeScript та середовище виконання Node.js.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-tree text-white">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-brown">Клієнтська частина</h3>
                      <p className="mt-2 text-base text-brown">
                        Для клієнтської частини використовується бібліотека для графічного інтерфейсу користувача React.js.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default AboutUs;
