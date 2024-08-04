import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  const loggedIn = { firstName: 'Shabani', lastName: 'AM', email: 'cybertawk@gmail.com' };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
             type="greeting"
             title="Welcome"
             user={loggedIn?.firstName || 'Guest'}
             subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
             accounts={[]}
             totalBanks={1}
             totalCurrentBalance={2640.75}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSidebar
         user={loggedIn}
         transactions={[]}
         banks={[{currentBalance: 134.45 }, { currentBalance: 120.40 }]}
      />
    </section>
  )
}

export default Home