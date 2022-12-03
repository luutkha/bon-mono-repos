import StatusView from 'libs/common/src/atoms/label/status-view/StatusView';
import FlexOneRow from 'libs/common/src/templates/flex-one-row/FlexOneRow';
import { useAppDispatch } from '../../../redux/hooks';
import { updateCurrenrSplashCardDashBroad } from '../../../redux/slice/splash-card.slice';
import { useSplashCardStore } from '../../../redux/store';
import { SplashCard } from '../../common/card/flash-card/SplashCard';
import CustomModal from '../../modal/CustomModal';
import { Container, Item } from './SplashCardDashbroadLayout.styles';
type Props = {}

const SplashCardDashbroadLayout = (props: Props) => {
    const dispatch = useAppDispatch();
    const { analysis, listWords, currentSplashCardDashBoard, currentListSplash, listSplashCardMatched, targetSplashCardNeedToLearn } = useSplashCardStore();
    const { bestStreak, streak, wrong } = analysis;

    const handleCardClick = (id: number) => {
        dispatch(updateCurrenrSplashCardDashBroad(id));
    };
    const customModalOnPage = (
        <CustomModal >
            <>
                <h2 >Hello</h2>
                <button>close</button>
                <div>I am a modal</div>
                <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form>
            </>

        </CustomModal>
    )
    return (
        <div>
            {customModalOnPage}
            <FlexOneRow customs={{ gap: '20px' }}>
                <StatusView title='Đúng' status={listSplashCardMatched.length.toString()} />
                <StatusView title='Sai' status={wrong.toString()} />
                <StatusView title='Liên tiếp' status={streak.toString()} />
                <StatusView title='Kỷ lục' status={bestStreak.toString()} />
            </FlexOneRow>
            {targetSplashCardNeedToLearn !== listSplashCardMatched.length ?
                <Container>
                    {currentSplashCardDashBoard.map((w, index) => (
                        <Item
                            key={index + `${w.isMatched}`}
                            onClick={() => handleCardClick(index)}
                        >
                            <SplashCard {...w} />
                        </Item>
                    ))}
                </Container>
                : 'done'}

        </div>
    )
}

export default SplashCardDashbroadLayout