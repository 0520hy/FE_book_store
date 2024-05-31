import { render, screen} from "@testing-library/react"
import Button from "./Button"
import { BookStoreThemeProvider } from "../../context/themeContext";

describe("Button 컴포넌트 테스트",()=>{
    it('렌더 확인', ()=> {
        // 1. 렌더시키고
        render(
            <BookStoreThemeProvider>
        <Button size="large" scheme="primary">버튼</Button>
        </BookStoreThemeProvider>
    );
        // 2. 확인
        expect(screen.getByText("버튼")).toBeInTheDocument();
        // 화면상에 버튼이라는 text를 가져와서 있는지 확인
    })
    
    it('size props 적용', ()=> {
        const {container} = render(
            <BookStoreThemeProvider>
            <Button size="large" scheme="primary">제목</Button>
            </BookStoreThemeProvider>
        )

        expect(screen.getByRole("button")).toHaveStyle({fontSize:"1.5rem"})
    })

     
    it('color props 적용', ()=> {
        const {container} = render(
            <BookStoreThemeProvider>
            <Button size="large" scheme="primary">제목</Button>
            </BookStoreThemeProvider>
        )

        expect(screen.getByRole("button")).toHaveStyle({color:"white"})
    })
    
})