import { CustomButton, FlexOneColumn, FlexOneRow, StatusView, wellDonePNG } from '@bon-mono-repos/common';
import TextField from '@mui/material/TextField';
import { useAppDispatch } from '../../../redux/hooks';
import { updateCurrenrSplashCardDashBroad } from '../../../redux/slice/splash-card.slice';
import { useSplashCardStore } from '../../../redux/store';
import { SplashCard } from '../../common/card/flash-card/SplashCard';
import CustomModal from '../../modal/CustomModal';
import { Container, Item } from './SplashCardDashbroadLayout.styles';
const SplashCardDashbroadLayout = () => {
    const dispatch = useAppDispatch();
    const { analysis, currentSplashCardDashBoard, listSplashCardMatched, targetSplashCardNeedToLearn } = useSplashCardStore();
    const { bestStreak, streak, wrong } = analysis;

    const handleCardClick = (id: number) => {
        dispatch(updateCurrenrSplashCardDashBroad(id));
    };
    const customModalOnPage = (
        <CustomModal customOpenButton={<CustomButton><div>Cài đặt</div></CustomButton>} >
            <div>
                <h2 >Hello</h2>
                <button>close</button>
                <div>I am a modal</div>
                <FlexOneColumn>
                    <TextField id="outlined-basic" label="Mục tiêu" variant="outlined" />
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </FlexOneColumn>
            </div>

        </CustomModal>
    )
    return (
        <FlexOneColumn customs={{ gap: '20px' }}>
            <FlexOneRow customs={{ justifyContent: 'flex-end' }}>
                {[customModalOnPage]}
            </FlexOneRow>
            <FlexOneRow customs={{ gap: '20px' }}>
                <StatusView title='Mục tiêu' status={targetSplashCardNeedToLearn.toString()} />
                <StatusView title='Đúng' status={listSplashCardMatched.length.toString()} />
                <StatusView title='Sai' status={wrong.toString()} />
                <StatusView title='Liên tiếp' status={streak.toString()} />
                <StatusView title='Kỷ lục' status={bestStreak.toString()} />
            </FlexOneRow>
            <div>

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

                    : <FlexOneColumn customs={{ width: "50%" }}>
                        <img src={wellDonePNG} alt="" />
                        <CustomButton onClick={() => console.log('//TODO')}>
                            <div>Làm lại</div>
                        </CustomButton>
                    </FlexOneColumn>
                }
            </div>

        </FlexOneColumn >
    )
}

export default SplashCardDashbroadLayout