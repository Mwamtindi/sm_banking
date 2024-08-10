import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async () => {
  const loggedIn = await getLoggedInUser();

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
             type="greeting"
             title="Welcome"
             user={loggedIn?.name || 'Guest'}
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