---
source_path: "documentation/AVFoundation/avassetwriterinput/mediadatalocation-swiftproperty.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetwriterinput/mediadatalocation-swiftproperty"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:mediadatalocation:0000:0001">mediaDataLocation</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mediadatalocation:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mediadatalocation:0002:0001">입력에서 미디어 데이터를 배치하고 인터리브하는 방식을 지정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mediadatalocation:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:mediadatalocation:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediadatalocation:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediadatalocation:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediadatalocation:0004:0004">macOS 10.13+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediadatalocation:0004:0005">tvOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediadatalocation:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var mediaDataLocation: AVAssetWriterInput.MediaDataLocation { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">챕터 트랙처럼 한 번에 모두 필요한 소량의 데이터가 들어 있는 트랙을 최적화하려면 이 속성을 사용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이 값을 <a href="avassetwriterinput/mediadatalocation-swift.struct/beforemainmediadatanotinterleaved.md">@@TOKEN_0@@</a>로 설정하면 에셋 라이터가 이 트랙의 미디어 데이터를 인터리브된 입력 전에 쓰도록 시도합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">QuickTime 파일과 같이 미디어 데이터 사전 로드를 지원하는 파일 형식의 경우, 이 값을 설정하면 파일에 미디어 데이터 사전 로드 지시자를 기록합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">미디어 데이터를 표시 시간에 가까워질 때만 필요로 하거나, 동시에 재생되는 미디어 데이터를 제공하는 입력이 여러 개 있는 경우에는 이 값을 <a href="avassetwriterinput/mediadatalocation-swift.struct/interleavedwithmainmediadata.md">@@TOKEN_0@@</a>로 설정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">작성 시작 후에는 이 값을 설정할 수 없습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avassetwriterinput/preferredmediachunkalignment.md">var preferredMediaChunkAlignment: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">미디어 청크를 정렬하기 위한 바이트 단위 경계입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avassetwriterinput/preferredmediachunkduration.md">var preferredMediaChunkDuration: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">출력 파일의 샘플 데이터 각 청크에 사용할 기간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avassetwriterinput/samplereferencebaseurl.md">var sampleReferenceBaseURL: URL?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">샘플 참조의 기준이 되는 기본 URL입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avassetwriterinput/mediadatalocation-swift.struct.md">AVAssetWriterInput.MediaDataLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">미디어 데이터의 배치 및 인터리브 방식을 나타내는 구조체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetwriterinput/mediadatalocation-swift.property">View on Apple Developer</a>*</span>
