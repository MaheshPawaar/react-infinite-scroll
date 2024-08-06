
# InfiniteScroll Component

The InfiniteScroll component is designed to dynamically load and display posts as the user scrolls down the page.

### Key features include:

- **useState Hooks**: Manages posts, pagination, and loading states.
- **useCallback Hook**: Fetches posts from an API asynchronously.
- **useEffect Hook**: Triggers post fetching on page load and when the page state changes.
- **IntersectionObserver API**: Monitors scrolling and loads more posts when the user reaches the end of the current list.


## Code Breakdown
- **State Management**: Uses useState to track posts, current page, and loading status.

- **Fetching Data**: The fetchPosts function fetches posts from https://dummyjson.com/posts with pagination.

- **Infinite Scrolling**: An IntersectionObserver triggers additional data fetching when the observed element (ref) becomes visible in the viewport.

- **Loading Indicator**: Displays a loading message while new posts are being fetched.


This component demonstrates efficient data fetching and rendering techniques in React for an infinite scrolling feature.