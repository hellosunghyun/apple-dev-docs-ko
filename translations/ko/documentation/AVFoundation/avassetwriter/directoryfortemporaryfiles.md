---
source_path: "documentation/AVFoundation/avassetwriter/directoryfortemporaryfiles.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetwriter/directoryfortemporaryfiles"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:directoryfortemporaryfiles:0000:0001">directoryForTemporaryFiles</span>

<span class="ko-segment" data-segment-id="seg:paragraph:directoryfortemporaryfiles:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:directoryfortemporaryfiles:0002:0001">내보내기 프로세스가 생성하는 임시 파일을 저장하는 디렉터리입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:directoryfortemporaryfiles:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:directoryfortemporaryfiles:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:directoryfortemporaryfiles:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:directoryfortemporaryfiles:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:directoryfortemporaryfiles:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:directoryfortemporaryfiles:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:directoryfortemporaryfiles:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var directoryForTemporaryFiles: URL? { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">멀티패스 인코딩 수행과 같은 일부 구성에서는 에셋 라이터가 임시 파일을 써야 할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이 속성 값을 사용해 임시 파일을 쓰는 파일 시스템 위치를 설정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">시스템은 쓰기가 성공적으로 완료되거나 실패하거나, 또는 쓰기 세션을 취소하면 모든 임시 파일을 삭제합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 값은 쓰기가 시작된 후에도 설정할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001">[var metadata: [AVMetadataItem]](avassetwriter/metadata.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">출력 파일에 쓸 메타데이터 항목의 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avassetwriter/shouldoptimizefornetworkuse.md">var shouldOptimizeForNetworkUse: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">출력 파일을 네트워크 재생에 더 적합하게 작성할지 나타내는 부울 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetwriter/directoryfortemporaryfiles">View on Apple Developer</a>*</span>
