import {
    Image,
    Wrapper,
    DescrScore,
    Title,
    OverwiewTitle,
    OverwiewDescr,
    GenresDescr,
    GenresText
} from './MovieInfo.styled';


export const MovieInfo = ({ poster, title, score, overview, genres }) => {
    return (
        <Wrapper>
            <Image src={poster} alt="" />
            <div>
                <Title>
                    {title}
                </Title>
                <DescrScore>{`User Score: ${score} %`}</DescrScore>
                <OverwiewTitle>Overwiew</OverwiewTitle>
                <OverwiewDescr>{overview}</OverwiewDescr>
                <GenresDescr>Genres</GenresDescr>
                <GenresText>{genres}</GenresText>
            </div>
        </Wrapper>
    );
};

