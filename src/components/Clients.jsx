/* eslint-disable no-unused-vars */
import { clients } from '../constants/index.';
import styles from '../style';
const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client, index) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
          >
            <img src={client.logo} alt='client' className='sm:w-[192px] w-[100px]' />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
