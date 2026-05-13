---
source_path: "documentation/AppIntents/assistantschemas/spreadsheetintent/updatesheet.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appintents/assistantschemas/spreadsheetintent/updatesheet"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:updatesheet:0000:0001">updateSheet</span>

<span class="ko-segment" data-segment-id="seg:paragraph:updatesheet:0001:0001">**Framework**: App Intents **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:updatesheet:0002:0001">이 앱 인텐트는 스프레드시트에서 시트를 업데이트하는 스키마를 준수합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:updatesheet:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:updatesheet:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:updatesheet:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:updatesheet:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:updatesheet:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:updatesheet:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:updatesheet:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:updatesheet:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var updateSheet: some AssistantSchemas.Intent { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">Swift 매크로를 사용하면 앱 인텐트 구현에서 추가 속성을 생성하고 protocol 적합성을 추가할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">다음 예제는 <code>.spreadsheet.updateSheet</code> 스키마를 준수하는 앱 인텐트를 보여줍니다.
``<code>swift
@AppIntent(schema: .spreadsheet.updateSheet)
struct UpdateSheetIntent: AppIntent {
    @Parameter
    var target: SheetEntity

    @Parameter
    var name: String?

    @Parameter
    var position: Int?

    func perform() async throws -&gt; some IntentResult {
        .result()
    }
</code>``</span>

```swift
@AppIntent(schema: .spreadsheet.updateSheet)
struct UpdateSheetIntent: AppIntent {
    @Parameter
    var target: SheetEntity

    @Parameter
    var name: String?

    @Parameter
    var position: Int?

    func perform() async throws -> some IntentResult {
        .result()
    }
```

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0001"><code>.spreadsheet</code> 앱 인텐트 도메인에 대한 자세한 내용은 <a href="making-spreadsheet-actions-available-to-siri-and-apple-intelligence.md">@@TOKEN_1@@</a>에서 확인할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0002">앱 인텐트 도메인에 대한 일반적인 정보는 <a href="integrating-actions-with-siri-and-apple-intelligence.md">@@TOKEN_0@@</a>에서 확인할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="assistantschemas/spreadsheetintent/addaudiotosheet.md">var addAudioToSheet: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">이 앱 인텐트는 슬라이드에 오디오를 추가하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="assistantschemas/spreadsheetintent/addcommenttosheet.md">var addCommentToSheet: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">이 앱 인텐트는 스프레드시트의 시트에 코멘트를 추가하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="assistantschemas/spreadsheetintent/addimagetosheet.md">var addImageToSheet: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">이 앱 인텐트는 스프레드시트의 시트에 이미지를 추가하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="assistantschemas/spreadsheetintent/addtextboxtosheet.md">var addTextBoxToSheet: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">이 앱 인텐트는 스프레드시트의 시트에 텍스트 박스를 추가하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="assistantschemas/spreadsheetintent/addvideotosheet.md">var addVideoToSheet: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">이 앱 인텐트는 스프레드시트의 시트에 비디오를 추가하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="assistantschemas/spreadsheetintent/addwebvideotosheet.md">var addWebVideoToSheet: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">이 앱 인텐트는 스프레드시트의 시트에 웹 비디오를 추가하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="assistantschemas/spreadsheetintent/create.md">var create: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">The app intent conforms to the schema for creating a spreadsheet.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="assistantschemas/spreadsheetintent/createsheet.md">var createSheet: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">The app intent conforms to the schema for creating a sheet in a spreadsheet.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="assistantschemas/spreadsheetintent/delete.md">var delete: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">The app intent conforms to the schema for deleting a spreadsheet.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="assistantschemas/spreadsheetintent/deletesheet.md">var deleteSheet: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">The app intent conforms to the schema for deleting a sheet in a spreadsheet.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="assistantschemas/spreadsheetintent/open.md">var open: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">The app intent conforms to the schema for opening a spreadsheet.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="assistantschemas/spreadsheetintent/opensheet.md">var openSheet: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">The app intent conforms to the schema for opening a sheet in a spreadsheet.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="assistantschemas/spreadsheetintent/update.md">var update: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">The app intent conforms to the schema for updating a spreadsheet.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="assistantschemas/spreadsheetintent.md">AssistantSchemas.SpreadsheetIntent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">Assistant schema conformance for app intents that offer spreadsheet functionality.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">*<a href="https://developer.apple.com/documentation/appintents/assistantschemas/spreadsheetintent/updatesheet">View on Apple Developer</a>*</span>
