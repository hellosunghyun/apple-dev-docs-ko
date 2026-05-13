---
source_path: "documentation/AppIntents/assistantschemas/filesintent.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appintents/assistantschemas/filesintent"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:assistantschemasfilesintent:0000:0001">AssistantSchemas.FilesIntent</span>

<span class="ko-segment" data-segment-id="seg:paragraph:assistantschemasfilesintent:0001:0001">**Framework**: App Intents **Kind**: protocol</span>

<span class="ko-segment" data-segment-id="seg:paragraph:assistantschemasfilesintent:0002:0001">파일 관리 기능을 제공하는 앱 인텐트의 Assistant 스키마 준수 항목입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:assistantschemasfilesintent:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:assistantschemasfilesintent:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:assistantschemasfilesintent:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:assistantschemasfilesintent:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:assistantschemasfilesintent:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:assistantschemasfilesintent:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:assistantschemasfilesintent:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:assistantschemasfilesintent:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
protocol FilesIntent : AssistantSchemas.Model
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="making-file-management-actions-available-to-siri-and-apple-intelligence.md">Making file management actions available to Siri and Apple Intelligence</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:instance-properties:0010:0001">인스턴스 속성</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0011:0001"><a href="assistantschemas/filesintent/createfolder.md">var createFolder: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0012:0001">앱 인텐트가 폴더 생성 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0013:0001"><a href="assistantschemas/filesintent/deletefiles.md">var deleteFiles: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0014:0001">앱 인텐트가 파일 삭제 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0015:0001"><a href="assistantschemas/filesintent/movefiles.md">var moveFiles: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0016:0001">앱 인텐트가 파일 이동 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0017:0001"><a href="assistantschemas/filesintent/openfile.md">var openFile: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0018:0001">앱 인텐트가 파일 열기 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0019:0001"><a href="assistantschemas/filesintent/renamefile.md">var renameFile: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0020:0001">앱 인텐트가 파일 이름 변경 스키마를 준수합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0021:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0022:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0023:0001"><a href="assistantschemas/model.md">AssistantSchemas.Model</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforming-types:0024:0001">준수 타입</span>

- <span class="ko-segment" data-segment-id="seg:list:conforming-types:0025:0001"><a href="assistantschema/intentschema.md">AssistantSchema.IntentSchema</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforming-types:0025:0002"><a href="assistantschemas/intentschema.md">AssistantSchemas.IntentSchema</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0026:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="assistantschemas/filesintent/createfolder.md">var createFolder: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">앱 인텐트가 폴더 생성 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="assistantschemas/filesintent/deletefiles.md">var deleteFiles: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">앱 인텐트가 파일 삭제 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="assistantschemas/filesintent/movefiles.md">var moveFiles: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">앱 인텐트가 파일 이동 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="assistantschemas/filesintent/openfile.md">var openFile: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">앱 인텐트가 파일 열기 스키마를 준수합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="assistantschemas/filesintent/renamefile.md">var renameFile: some AssistantSchemas.Intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">앱 인텐트가 파일 이름 변경 스키마를 준수합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">*<a href="https://developer.apple.com/documentation/appintents/assistantschemas/filesintent">View on Apple Developer</a>*</span>
