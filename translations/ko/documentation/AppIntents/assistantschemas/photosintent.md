---
source_path: "documentation/AppIntents/assistantschemas/photosintent.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appintents/assistantschemas/photosintent"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:assistantschemasphotosintent:0000:0001">AssistantSchemas.PhotosIntent</span>

<span class="ko-segment" data-segment-id="seg:paragraph:assistantschemasphotosintent:0001:0001">**Framework**: App Intents **Kind**: protocol</span>

<span class="ko-segment" data-segment-id="seg:paragraph:assistantschemasphotosintent:0002:0001">사진 및 비디오 기능을 제공하는 앱 인텐트에 대한 Assistant 스키마 준수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:assistantschemasphotosintent:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:assistantschemasphotosintent:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:assistantschemasphotosintent:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:assistantschemasphotosintent:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:assistantschemasphotosintent:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:assistantschemasphotosintent:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:assistantschemasphotosintent:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:assistantschemasphotosintent:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
protocol PhotosIntent : AssistantSchemas.Model
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="making-photo-and-video-actions-available-to-siri-and-apple-intelligence.md">Making photo and video actions available to Siri and Apple Intelligence</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:instance-properties:0010:0001">인스턴스 속성</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0011:0001"><a href="assistantschemas/photosintent/addassetstoalbum.md">var addAssetsToAlbum: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0012:0001">앱 인텐트는 앨범에 에셋을 추가하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0013:0001"><a href="assistantschemas/photosintent/cleanupphoto.md">var cleanupPhoto: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0014:0001">앱 인텐트는 에셋의 편집을 되돌리는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0015:0001"><a href="assistantschemas/photosintent/copyedits.md">var copyEdits: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0016:0001">앱 인텐트는 에셋의 편집을 복사하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0017:0001"><a href="assistantschemas/photosintent/createalbum.md">var createAlbum: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0018:0001">앱 인텐트는 앨범을 생성하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0019:0001"><a href="assistantschemas/photosintent/createassets.md">var createAssets: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0020:0001">앱 인텐트는 에셋을 생성하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0021:0001"><a href="assistantschemas/photosintent/crop.md">var crop: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0022:0001">앱 인텐트는 에셋을 자르는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0023:0001"><a href="assistantschemas/photosintent/deletealbum.md">var deleteAlbum: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0024:0001">앱 인텐트는 앨범을 삭제하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0025:0001"><a href="assistantschemas/photosintent/deleteassets.md">var deleteAssets: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0026:0001">앱 인텐트는 에셋을 삭제하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0027:0001"><a href="assistantschemas/photosintent/duplicateassets.md">var duplicateAssets: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0028:0001">앱 인텐트는 에셋을 복제하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0029:0001"><a href="assistantschemas/photosintent/openalbum.md">var openAlbum: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0030:0001">앱 인텐트는 앨범을 여는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0031:0001"><a href="assistantschemas/photosintent/openasset.md">var openAsset: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0032:0001">앱 인텐트는 에셋을 여는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0033:0001"><a href="assistantschemas/photosintent/pasteedits.md">var pasteEdits: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0034:0001">앱 인텐트는 에셋에 편집을 붙여넣는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0035:0001"><a href="assistantschemas/photosintent/posttosharedalbum.md">var postToSharedAlbum: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0036:0001">앱 인텐트는 에셋을 공유 앨범에 게시하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0037:0001"><a href="assistantschemas/photosintent/removeassetsfromalbum.md">var removeAssetsFromAlbum: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0038:0001">앱 인텐트는 앨범에서 에셋을 제거하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0039:0001"><a href="assistantschemas/photosintent/search.md">var search: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0040:0001">앱 인텐트는 미디어 라이브러리의 콘텐츠를 검색하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0041:0001"><a href="assistantschemas/photosintent/setdepth.md">var setDepth: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0042:0001">앱 인텐트는 에셋의 조리개를 설정하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0043:0001"><a href="assistantschemas/photosintent/setexposure.md">var setExposure: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0044:0001">앱 인텐트는 에셋의 노출을 설정하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0045:0001"><a href="assistantschemas/photosintent/setfilter.md">var setFilter: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0046:0001">앱 인텐트는 에셋에 필터를 적용하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0047:0001"><a href="assistantschemas/photosintent/setrotation.md">var setRotation: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0048:0001">앱 인텐트는 에셋을 회전하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0049:0001"><a href="assistantschemas/photosintent/setsaturation.md">var setSaturation: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0050:0001">앱 인텐트는 에셋의 채도를 설정하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0051:0001"><a href="assistantschemas/photosintent/setwarmth.md">var setWarmth: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0052:0001">앱 인텐트는 에셋의 색온도를 설정하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0053:0001"><a href="assistantschemas/photosintent/straighten.md">var straighten: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0054:0001">앱 인텐트는 에셋의 기울기를 보정하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0055:0001"><a href="assistantschemas/photosintent/toggledepth.md">var toggleDepth: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0056:0001">앱 인텐트는 에셋의 심도를 토글하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0057:0001"><a href="assistantschemas/photosintent/togglesuggestededits.md">var toggleSuggestedEdits: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0058:0001">앱 인텐트는 에셋을 향상하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0059:0001"><a href="assistantschemas/photosintent/updatealbum.md">var updateAlbum: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0060:0001">앱 인텐트는 앨범을 업데이트하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0061:0001"><a href="assistantschemas/photosintent/updateasset.md">var updateAsset: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0062:0001">앱 인텐트는 에셋을 업데이트하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0063:0001"><a href="assistantschemas/photosintent/updaterecognizedperson.md">var updateRecognizedPerson: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0064:0001">앱 인텐트는 에셋 내에서 인식된 사람을 업데이트하는 스키마를 준수합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0065:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0066:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0067:0001"><a href="assistantschemas/model.md">AssistantSchemas.Model</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforming-types:0068:0001">준수 타입</span>

- <span class="ko-segment" data-segment-id="seg:list:conforming-types:0069:0001"><a href="assistantschema/intentschema.md">AssistantSchema.IntentSchema</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforming-types:0069:0002"><a href="assistantschemas/intentschema.md">AssistantSchemas.IntentSchema</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0070:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0071:0001"><a href="assistantschemas/photosintent/addassetstoalbum.md">var addAssetsToAlbum: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0072:0001">앱 인텐트는 앨범에 에셋을 추가하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0073:0001"><a href="assistantschemas/photosintent/cleanupphoto.md">var cleanupPhoto: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0074:0001">앱 인텐트는 에셋의 편집을 되돌리는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0075:0001"><a href="assistantschemas/photosintent/copyedits.md">var copyEdits: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0076:0001">앱 인텐트는 에셋의 편집을 복사하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0077:0001"><a href="assistantschemas/photosintent/createalbum.md">var createAlbum: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0078:0001">앱 인텐트는 앨범을 생성하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0079:0001"><a href="assistantschemas/photosintent/createassets.md">var createAssets: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0080:0001">앱 인텐트는 에셋을 생성하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0081:0001"><a href="assistantschemas/photosintent/crop.md">var crop: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0082:0001">앱 인텐트는 에셋을 자르는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0083:0001"><a href="assistantschemas/photosintent/deletealbum.md">var deleteAlbum: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0084:0001">앱 인텐트는 앨범을 삭제하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0085:0001"><a href="assistantschemas/photosintent/deleteassets.md">var deleteAssets: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0086:0001">앱 인텐트는 에셋을 삭제하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0087:0001"><a href="assistantschemas/photosintent/duplicateassets.md">var duplicateAssets: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0088:0001">앱 인텐트는 에셋을 복제하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0089:0001"><a href="assistantschemas/photosintent/openalbum.md">var openAlbum: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0090:0001">앱 인텐트는 앨범을 여는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0091:0001"><a href="assistantschemas/photosintent/pasteedits.md">var pasteEdits: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0092:0001">앱 인텐트는 에셋에 편집을 붙여넣는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0093:0001"><a href="assistantschemas/photosintent/posttosharedalbum.md">var postToSharedAlbum: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0094:0001">앱 인텐트는 에셋을 공유 앨범에 게시하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0095:0001"><a href="assistantschemas/photosintent/removeassetsfromalbum.md">var removeAssetsFromAlbum: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0096:0001">앱 인텐트는 앨범에서 에셋을 제거하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0097:0001"><a href="assistantschemas/photosintent/search.md">var search: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0098:0001">앱 인텐트는 미디어 라이브러리의 콘텐츠를 검색하는 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0099:0001"><a href="assistantschemas/photosintent/setdepth.md">var setDepth: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0100:0001">앱 인텐트는 에셋의 조리개를 설정하는 스키마를 준수합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0102:0001">*<a href="https://developer.apple.com/documentation/appintents/assistantschemas/photosintent">View on Apple Developer</a>*</span>
