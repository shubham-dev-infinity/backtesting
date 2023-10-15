import cn from "classnames";
import { Button } from "../../../../component/button";
import './styles.scss'
type TSubscriptionCard = {
    duration: string;
    price: string;
    priceLabel: string;
    features: string[];
    selectSub: React.Dispatch<React.SetStateAction<number>>;
    index: number;
    activeIndex: number;
}

const SubscriptionPlan = ({ duration, price, priceLabel, features, selectSub, index, activeIndex }: TSubscriptionCard) => {
    return (
        <>
            <article className={cn("subscription hover:cursor-pointer hover:border-blue-500 hover:border-1", index === activeIndex && 'active_Subscription')} onClick={() => selectSub(index)}>
                <section className={cn("p-4 sub_Duration", index === activeIndex && 'active_Sub_Duration')}>
                    <h2 className="text-2xl text-center text_Light">{duration}</h2>
                </section>
                <section className="p-4">
                    <div className="flex justify-center align-center mb-4"><h1 className="text-3xl">{price} </h1> <p className="flex" style={{ alignItems: 'end' }}>{`(${priceLabel})`}</p> </div>
                    <div >
                        <ul>
                            {
                                features.map((feature) => <li key={feature} className="flex gap-3" style={{ alignItems: 'center' }}>
                                    <div className="true_Icon">
                                        <img src="/assets/png/true.png" />
                                    </div>
                                    <p className="my-2 text_Light">{feature}</p>
                                </li>
                                )
                            }
                        </ul>
                    </div>
                    <div className="p-4 text-center">
                        <Button className={cn("auth_Default_Btn get_Start_Btn", index === activeIndex && 'active_Get_Start_Btn')}>Get Started</Button>
                    </div>
                </section>
            </article >
        </>
    )
}

export default SubscriptionPlan