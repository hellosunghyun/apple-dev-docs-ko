---
source_path: "documentation/AppIntents/assistantschemas/readerintent/searchdocuments.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appintents/assistantschemas/readerintent/searchdocuments"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:searchdocuments:0000:0001">searchDocuments</span>

<span class="ko-segment" data-segment-id="seg:paragraph:searchdocuments:0001:0001">**Framework**: App Intents **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:searchdocuments:0002:0001">The app intent conforms to the schema for searching in a document.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:searchdocuments:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:searchdocuments:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:searchdocuments:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:searchdocuments:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:searchdocuments:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:searchdocuments:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:searchdocuments:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:searchdocuments:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var searchDocuments: some AssistantSchemas.Intent { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">Use Swift macros that generate additional properties and add protocol conformance for your app intent implementation.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">The following example shows an app intent that conforms to the <code>.reader.searchDocuments</code> schema:</span>

```swift
@AppIntent(schema: .reader.searchDocuments)
struct SearchReaderDocumentsIntent: AppIntent {
    @Parameter
    var documents: [ReaderDocumentEntity]

    @Parameter
    var criteria: String

    func perform() async throws -> some IntentResult {
        return .result()
    }
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0001">For more information about the <code>.reader</code> app intent domain, see <a href="making-document-reader-actions-available-to-siri-and-apple-intelligence.md">@@TOKEN_1@@</a>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0002">For general information about app intent domains, see <a href="integrating-actions-with-siri-and-apple-intelligence.md">@@TOKEN_0@@</a>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="assistantschemas/readerintent/deletepages.md">var deletePages: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">The app intent conforms to the schema for deleting a page.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="assistantschemas/readerintent/enhancedocuments.md">var enhanceDocuments: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">The app intent conforms to the schema for enhancing a document.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="assistantschemas/readerintent/insertpages.md">var insertPages: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">The app intent conforms to the schema for inserting a page.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="assistantschemas/readerintent/opendocument.md">var openDocument: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">The app intent conforms to the schema for opening a text document.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="assistantschemas/readerintent/openpage.md">var openPage: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">The app intent conforms to the schema for opening a document.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="assistantschemas/readerintent/resizedocuments.md">var resizeDocuments: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">앱 인텐트는 문서 크기 조정용 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="assistantschemas/readerintent/rotatedocuments.md">var rotateDocuments: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">앱 인텐트는 문서 회전용 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="assistantschemas/readerintent/rotatepages.md">var rotatePages: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">앱 인텐트는 페이지 회전용 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="assistantschemas/readerintent.md">AssistantSchemas.ReaderIntent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">문서 보기 및 편집 기능을 제공하는 앱 인텐트용 Assistant 스키마 준수 항목입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/appintents/assistantschemas/readerintent/searchdocuments">View on Apple Developer</a>*</span>
