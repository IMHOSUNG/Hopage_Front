
import { useState, useEffect, useCallback } from 'react';

let lastScrollPosition = 0;

const useInfiniteScroll:any = (callback:any)=> {
        
    const [isFetching, setIsFetching] = useState(false);
    const handleScroll = useCallback(() => {
        //check direction
        var newScrollPosition = window.scrollY;
        if (newScrollPosition < lastScrollPosition){
            //up
        }else{
            //down
            checkUnder()
        }
        lastScrollPosition = newScrollPosition;
    },[])

    const call = useCallback(()=>callback(),[callback])
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return() => window.removeEventListener("scroll", handleScroll)
    },[handleScroll]);

    useEffect(() => {
        if (!isFetching) return;
        call()
    }, [isFetching]);

    const checkUnder = () => {
        const { innerHeight } = window;
        const { scrollHeight } = document.body;
        // IE에서는 document.documentElement 를 사용.
        const scrollTop =
          (document.documentElement && document.documentElement.scrollTop) ||
          document.body.scrollTop;
        // 스크롤링 했을때, 브라우저의 가장 밑에서 100정도 높이가 남았을때에 실행하기위함.
    
        if (scrollHeight - innerHeight - scrollTop < 100) {

            setIsFetching(true)
        }
    };
      
    return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
