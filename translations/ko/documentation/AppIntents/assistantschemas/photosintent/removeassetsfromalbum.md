---
source_path: "documentation/AppIntents/assistantschemas/photosintent/removeassetsfromalbum.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appintents/assistantschemas/photosintent/removeassetsfromalbum"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:removeassetsfromalbum:0000:0001">removeAssetsFromAlbum</span>

<span class="ko-segment" data-segment-id="seg:paragraph:removeassetsfromalbum:0001:0001">**Framework**: App Intents **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:removeassetsfromalbum:0002:0001">앱 인텐트가 앨범에서 에셋을 제거하는 스키마를 준수합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:removeassetsfromalbum:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:removeassetsfromalbum:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:removeassetsfromalbum:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:removeassetsfromalbum:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:removeassetsfromalbum:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:removeassetsfromalbum:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:removeassetsfromalbum:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:removeassetsfromalbum:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var removeAssetsFromAlbum: some AssistantSchemas.Intent { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">앱 인텐트 구현에서 추가 속성을 생성하고 프로토콜 준수를 추가하는 Swift 매크로를 사용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">다음 예제는 <code>.photos.removeAssetsFromAlbum</code> 스키마를 준수하는 앱 인텐트를 보여 줍니다.</span>

```swift
@AppIntent(schema: .photos.removeAssetsFromAlbum)
struct RemoveMediaAssetsFromAlbumIntent: AppIntent {
    @Parameter
    var album: PhotoAlbumEntity

    @Parameter
    var assets: [PhotoEntity]

    func perform() async throws -> some IntentResult {
        .result()
    }
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0001"><code>.photos</code> 앱 인텐트 도메인에 대한 자세한 내용은 <a href="making-photo-and-video-actions-available-to-siri-and-apple-intelligence.md">@@TOKEN_1@@</a>를 참조합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0002">앱 인텐트 도메인 일반 정보는 <a href="integrating-actions-with-siri-and-apple-intelligence.md">@@TOKEN_0@@</a>를 참조합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="assistantschemas/photosintent/addassetstoalbum.md">var addAssetsToAlbum: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">앱 인텐트가 앨범에 에셋을 추가하는 스키마를 준수합니다.</span>

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

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="assistantschemas/photosintent/search.md">var search: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">The app intent conforms to the schema for searching the content in the media library.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="assistantschemas/photosintent/setdepth.md">var setDepth: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">The app intent conforms to the schema for setting the aperture of an asset.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="assistantschemas/photosintent/setexposure.md">var setExposure: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">The app intent conforms to the schema for setting the exposure of an asset.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">*<a href="https://developer.apple.com/documentation/appintents/assistantschemas/photosintent/removeassetsfromalbum">View on Apple Developer</a>*</span>
