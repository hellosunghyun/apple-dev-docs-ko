---
source_path: "documentation/AVFoundation/avsamplecursor/currentchunkinfo.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avsamplecursor/currentchunkinfo"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:currentchunkinfo:0000:0001">currentChunkInfo</span>

<span class="ko-segment" data-segment-id="seg:paragraph:currentchunkinfo:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:currentchunkinfo:0002:0001">현재 샘플이 속한 샘플 청크에 대한 정보를 제공하는 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:currentchunkinfo:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:currentchunkinfo:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentchunkinfo:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentchunkinfo:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentchunkinfo:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentchunkinfo:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentchunkinfo:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentchunkinfo:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var currentChunkInfo: AVSampleCursorChunkInfo { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">샘플 시퀀스를 정의하는 미디어 형식이 샘플 분할을 지정하지 않으면 커서는 각 샘플을 하나의 샘플로만 구성된 청크에 속한 것으로 간주합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avsamplecursorchunkinfo.md">struct AVSampleCursorChunkInfo</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">미디어 샘플 청크에 대한 정보를 제공하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avsamplecursor/currentchunkstoragerange.md">var currentChunkStorageRange: AVSampleCursorStorageRange</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">현재 샘플과 함께 청크 단위로 로드할 저장소 컨테이너 내 샘플 범위입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avsamplecursorstoragerange.md">struct AVSampleCursorStorageRange</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">미디어 샘플 또는 해당 청크의 저장 오프셋과 길이를 나타내는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avsamplecursor/currentchunkstorageurl.md">var currentChunkStorageURL: URL?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">현재 샘플과 같은 연산에서 청크로 함께 로드할 샘플의 저장 컨테이너 URL입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avsamplecursor/currentsampledependencyinfo.md">var currentSampleDependencyInfo: AVSampleCursorDependencyInfo</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">동일한 샘플 시퀀스 내에서 현재 샘플과 다른 샘플 간의 관계를 설명하는 의존성 정보입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avsamplecursordependencyinfo.md">struct AVSampleCursorDependencyInfo</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">동일한 샘플 시퀀스 내에서 미디어 샘플과 다른 미디어 샘플 간의 의존성을 설명하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avsamplecursor/currentsampleduration.md">var currentSampleDuration: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">커서의 현재 위치에 있는 샘플의 디코드 길이입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avsamplecursor/currentsampleindexinchunk.md">var currentSampleIndexInChunk: Int64</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">현재 샘플이 속한 청크 내에서의 현재 샘플 인덱스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avsamplecursor/currentsamplestoragerange.md">var currentSampleStorageRange: AVSampleCursorStorageRange</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">현재 청크 저장소 URL에서 현재 샘플의 오프셋과 길이입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avsamplecursor/currentsamplesyncinfo.md">var currentSampleSyncInfo: AVSampleCursorSyncInfo</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">디코더 재동기화 시 고려할 현재 샘플의 동기화 정보입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avsamplecursorsyncinfo.md">struct AVSampleCursorSyncInfo</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">디코더 재동기화 시 고려할 미디어 샘플의 특성을 설명하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avsamplecursor/copycurrentsampleformatdescription.md">func copyCurrentSampleFormatDescription() -&gt; CMFormatDescription</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">커서의 현재 위치에 있는 샘플의 형식 설명을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="avsamplecursor/currentsampleaudiodependencyinfo.md">var currentSampleAudioDependencyInfo: AVSampleCursorAudioDependencyInfo</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">오디오 샘플의 독립적 디코드 가능성 정보입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001">[var currentSampleDependencyAttachments: [AnyHashable : Any]?](avsamplecursor/currentsampledependencyattachments.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">의존성 관련 샘플 버퍼 첨부를 담는 사전입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avsamplecursor/currentchunkinfo">View on Apple Developer</a>*</span>
