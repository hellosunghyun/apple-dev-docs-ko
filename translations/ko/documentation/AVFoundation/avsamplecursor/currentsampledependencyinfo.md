---
source_path: "documentation/AVFoundation/avsamplecursor/currentsampledependencyinfo.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avsamplecursor/currentsampledependencyinfo"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:currentsampledependencyinfo:0000:0001">currentSampleDependencyInfo</span>

<span class="ko-segment" data-segment-id="seg:paragraph:currentsampledependencyinfo:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:currentsampledependencyinfo:0002:0001">동일한 샘플 시퀀스에서 미디어 샘플과 다른 미디어 샘플 간의 관계를 설명하는 종속성 정보입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:currentsampledependencyinfo:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:currentsampledependencyinfo:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentsampledependencyinfo:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentsampledependencyinfo:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentsampledependencyinfo:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentsampledependencyinfo:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentsampledependencyinfo:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentsampledependencyinfo:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var currentSampleDependencyInfo: AVSampleCursorDependencyInfo { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="avsamplecursor/currentchunkinfo.md">var currentChunkInfo: AVSampleCursorChunkInfo</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">현재 샘플이 속한 샘플 청크에 대한 정보를 제공하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avsamplecursorchunkinfo.md">struct AVSampleCursorChunkInfo</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">미디어 샘플 청크에 대한 정보를 제공하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avsamplecursor/currentchunkstoragerange.md">var currentChunkStorageRange: AVSampleCursorStorageRange</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">현재 샘플과 함께 청크로 로드할 저장소 컨테이너의 샘플 범위를 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avsamplecursorstoragerange.md">struct AVSampleCursorStorageRange</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">미디어 샘플 또는 그 청크의 저장 오프셋과 길이를 나타내는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avsamplecursor/currentchunkstorageurl.md">var currentChunkStorageURL: URL?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">현재 샘플 및 동일한 작업에서 동일 청크로 함께 로드할 다른 샘플의 저장소 컨테이너 URL입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avsamplecursordependencyinfo.md">struct AVSampleCursorDependencyInfo</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">동일한 샘플 시퀀스에서 미디어 샘플과 다른 미디어 샘플 간의 종속성을 설명하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avsamplecursor/currentsampleduration.md">var currentSampleDuration: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">커서의 현재 위치에서 샘플의 디코딩 기간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avsamplecursor/currentsampleindexinchunk.md">var currentSampleIndexInChunk: Int64</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">현재 샘플이 속한 청크 내에서의 인덱스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avsamplecursor/currentsamplestoragerange.md">var currentSampleStorageRange: AVSampleCursorStorageRange</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">현재 청크 저장소 URL에서 현재 샘플의 오프셋과 길이입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avsamplecursor/currentsamplesyncinfo.md">var currentSampleSyncInfo: AVSampleCursorSyncInfo</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">디코더를 재동기화할 때 고려할 현재 샘플의 동기화 정보입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avsamplecursorsyncinfo.md">struct AVSampleCursorSyncInfo</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">디코더를 재동기화할 때 고려할 미디어 샘플 속성을 설명하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avsamplecursor/copycurrentsampleformatdescription.md">func copyCurrentSampleFormatDescription() -&gt; CMFormatDescription</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">커서의 현재 위치에 있는 샘플의 형식 설명을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avsamplecursor/currentsampleaudiodependencyinfo.md">var currentSampleAudioDependencyInfo: AVSampleCursorAudioDependencyInfo</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">오디오 샘플의 독립적인 디코딩 가능성 정보입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001">[var currentSampleDependencyAttachments: [AnyHashable : Any]?](avsamplecursor/currentsampledependencyattachments.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">의존성 관련 샘플 버퍼 첨부 항목의 사전입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avsamplecursor/currentsampledependencyinfo">View on Apple Developer</a>*</span>
