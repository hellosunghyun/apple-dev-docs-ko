---
source_path: "documentation/AVFoundation/avassetexportsession/timerange.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetexportsession/timerange"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:timerange:0000:0001">timeRange</span>

<span class="ko-segment" data-segment-id="seg:paragraph:timerange:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:timerange:0002:0001">내보낼 원본 에셋의 시간 범위입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:timerange:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:timerange:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:timerange:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:timerange:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:timerange:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:timerange:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:timerange:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var timeRange: CMTimeRange { get set }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">관련 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="avassetexportsession/outputurl.md">var outputURL: URL?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">에셋 내보내기 세션이 출력물을 쓰는 URL입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avassetexportsession/outputfiletype.md">var outputFileType: AVFileType?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">에셋 내보내기 세션이 쓰는 출력 파일 형식입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[var supportedFileTypes: [AVFileType]](avassetwriterinputtaggedpixelbuffergroupadaptor/sourcepixelbufferattributes.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">세션에서 쓸 수 있는 파일 형식을 포함하는 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avassetexportsession/allowsparallelizedexport.md">var allowsParallelizedExport: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">세션이 내보내기 작업을 병렬로 수행할 수 있는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avassetexportsession/shouldoptimizefornetworkuse.md">var shouldOptimizeForNetworkUse: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">동영상을 네트워크 사용용으로 최적화할지 여부를 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avassetexportsession/canperformmultiplepassesoversourcemediadata.md">var canPerformMultiplePassesOverSourceMediaData: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">더 나은 결과를 위해 원본 미디어를 여러 번 순회할 수 있는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avassetexportsession/filelengthlimit.md">var fileLengthLimit: Int64</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">세션 출력이 초과하면 안 되는 파일 길이입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avassetexportsession/directoryfortemporaryfiles.md">var directoryForTemporaryFiles: URL?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">내보내기 과정에서 생성된 임시 파일을 저장할 수 있는 디렉터리입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetexportsession/timerange">View on Apple Developer</a>*</span>
