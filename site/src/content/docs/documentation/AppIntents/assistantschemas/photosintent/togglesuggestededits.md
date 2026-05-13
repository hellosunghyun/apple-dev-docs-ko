---
source_path: "documentation/AppIntents/assistantschemas/photosintent/togglesuggestededits.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appintents/assistantschemas/photosintent/togglesuggestededits"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:togglesuggestededits:0000:0001">toggleSuggestedEdits</span>

<span class="ko-segment" data-segment-id="seg:paragraph:togglesuggestededits:0001:0001">**Framework**: App Intents **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:togglesuggestededits:0002:0001">The app intent conforms to the schema for enhancing an asset.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:togglesuggestededits:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:togglesuggestededits:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:togglesuggestededits:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:togglesuggestededits:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:togglesuggestededits:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:togglesuggestededits:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:togglesuggestededits:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:togglesuggestededits:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var toggleSuggestedEdits: some AssistantSchemas.Intent { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">Use Swift macros that generate additional properties and add protocol conformance for your app intent implementation.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">The following example shows an app intent that conforms to the <code>.photos.toggleSuggestedEdits</code> schema:</span>

```swift
@AppIntent(schema: .photos.toggleSuggestedEdits)
struct EnhanceMediaIntent: AppIntent {
    @Parameter
    var target: PhotoEntity

    @Parameter
    var isEnabled: Bool

    func perform() async throws -> some IntentResult {
        .result()
    }
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0001">For more information about the <code>.photos</code> app intent domain, see <a href="making-photo-and-video-actions-available-to-siri-and-apple-intelligence.md">@@TOKEN_1@@</a>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0002">For general information about app intent domains, see <a href="integrating-actions-with-siri-and-apple-intelligence.md">@@TOKEN_0@@</a>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="assistantschemas/photosintent/addassetstoalbum.md">var addAssetsToAlbum: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">The app intent conforms to the schema for adding an asset to an album.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="assistantschemas/photosintent/cleanupphoto.md">var cleanupPhoto: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">The app intent conforms to the schema for undoing edits to an asset.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="assistantschemas/photosintent/copyedits.md">var copyEdits: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">The app intent conforms to the schema for copying edits to an asset.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="assistantschemas/photosintent/createalbum.md">var createAlbum: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">The app intent conforms to the schema for creating an album.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="assistantschemas/photosintent/createassets.md">var createAssets: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">The app intent conforms to the schema for creating an asset.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="assistantschemas/photosintent/crop.md">var crop: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">The app intent conforms to the schema for cropping an asset.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="assistantschemas/photosintent/deletealbum.md">var deleteAlbum: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">The app intent conforms to the schema for deleting an album.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="assistantschemas/photosintent/deleteassets.md">var deleteAssets: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">The app intent conforms to the schema for deleting an asset.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="assistantschemas/photosintent/duplicateassets.md">var duplicateAssets: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">The app intent conforms to the schema for duplicating an asset.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="assistantschemas/photosintent/openalbum.md">var openAlbum: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">The app intent conforms to the schema for opening an album.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="assistantschemas/photosintent/pasteedits.md">var pasteEdits: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">The app intent conforms to the schema for pasting edits to an asset.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="assistantschemas/photosintent/posttosharedalbum.md">var postToSharedAlbum: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">The app intent conforms to the schema for posting an asset to a shared album.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="assistantschemas/photosintent/removeassetsfromalbum.md">var removeAssetsFromAlbum: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">The app intent conforms to the schema for removing an asset from an album.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="assistantschemas/photosintent/search.md">var search: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">The app intent conforms to the schema for searching the content in the media library.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="assistantschemas/photosintent/setdepth.md">var setDepth: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">Adam 최적화 알고리즘을 사용하는 옵티마이저입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">*<a href="https://developer.apple.com/documentation/appintents/assistantschemas/photosintent/togglesuggestededits">View on Apple Developer</a>*</span>
