---
source_path: "documentation/AppIntents/assistantschemas/browserintent/bookmarkurl.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appintents/assistantschemas/browserintent/bookmarkurl"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bookmarkurl:0000:0001">bookmarkURL</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bookmarkurl:0001:0001">**Framework**: App Intents **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bookmarkurl:0002:0001">앱 인텐트가 URL 북마크 생성 스키마를 준수합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bookmarkurl:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bookmarkurl:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bookmarkurl:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bookmarkurl:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bookmarkurl:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bookmarkurl:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bookmarkurl:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bookmarkurl:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var bookmarkURL: some AssistantSchemas.Intent { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">앱 인텐트 구현에서 추가 속성을 생성하고 프로토콜 준수를 추가하는 Swift 매크로를 사용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">다음 예제는 <code>.browser.bookmarkURL</code> 스키마를 준수하는 앱 인텐트를 보여 줍니다.</span>

```swift
@AppIntent(schema: .browser.bookmarkURL)
struct BookmarkURLIntent: AppIntent {
    @Parameter
    var name: String?

    @Parameter
    var url: URL

    func perform() async throws -> some ReturnsValue<BookmarkEntity> {
        .result(value: BookmarkEntity())
    }
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0001"><code>.browser</code> 앱 인텐트 도메인에 대한 자세한 내용은 <a href="making-browser-actions-available-to-siri-and-apple-intelligence.md">@@TOKEN_1@@</a>를 참조합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0002">앱 인텐트 도메인 일반 정보는 <a href="integrating-actions-with-siri-and-apple-intelligence.md">@@TOKEN_0@@</a>를 참조합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="assistantschemas/browserintent/bookmarktab.md">var bookmarkTab: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">앱 인텐트가 브라우저 탭에 새 북마크를 생성하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="assistantschemas/browserintent/clearhistory.md">var clearHistory: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">앱 인텐트가 브라우저 기록을 지우는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="assistantschemas/browserintent/closetabs.md">var closeTabs: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">앱 인텐트가 브라우저 탭을 닫는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="assistantschemas/browserintent/closewindows.md">var closeWindows: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">앱 인텐트가 하나 이상의 브라우저 창 닫기 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="assistantschemas/browserintent/createtab.md">var createTab: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">앱 인텐트가 브라우저 탭을 생성하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="assistantschemas/browserintent/createwindow.md">var createWindow: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">앱 인텐트가 새 브라우저 창을 생성하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="assistantschemas/browserintent/deletebookmarks.md">var deleteBookmarks: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">앱 인텐트가 북마크를 삭제하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="assistantschemas/browserintent/findonpage.md">var findOnPage: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">앱 인텐트가 웹 페이지에서 텍스트를 찾는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="assistantschemas/browserintent/openbookmark.md">var openBookmark: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">앱 인텐트가 북마크된 URL을 여는 Assistant 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="assistantschemas/browserintent/openurlintab.md">var openURLInTab: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">앱 인텐트가 브라우저 탭에서 URL을 로드하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="assistantschemas/browserintent/switchtab.md">var switchTab: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">앱 인텐트가 특정 탭으로 전환하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="assistantschemas/browserintent.md">AssistantSchemas.BrowserIntent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">웹 브라우징 기능을 제공하는 앱 인텐트의 Assistant 스키마 준수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">*<a href="https://developer.apple.com/documentation/appintents/assistantschemas/browserintent/bookmarkurl">View on Apple Developer</a>*</span>
