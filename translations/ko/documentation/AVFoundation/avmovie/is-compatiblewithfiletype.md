---
source_path: "documentation/AVFoundation/avmovie/is-compatiblewithfiletype.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmovie/is-compatiblewithfiletype"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:iscompatiblewithfiletype:0000:0001">is(compatibleWithFileType:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:iscompatiblewithfiletype:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:iscompatiblewithfiletype:0002:0001">지정한 타입의 영화 헤더를 시스템에서 생성할 수 있는지 나타내는 부울 값을 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:iscompatiblewithfiletype:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:iscompatiblewithfiletype:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:iscompatiblewithfiletype:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:iscompatiblewithfiletype:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:iscompatiblewithfiletype:0004:0004">macOS 10.11+</span>
- <span class="ko-segment" data-segment-id="seg:list:iscompatiblewithfiletype:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:iscompatiblewithfiletype:0004:0006">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func `is`(compatibleWithFileType fileType: AVFileType) -> Bool
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001"><a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a>가 반환되면 영화에 지정한 파일 타입에서 허용되는 미디어 타입의 트랙만 포함된 것입니다. 그렇지 않으면 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_1@@</a>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>fileType</code>: 테스트할 파일 타입입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmovie/makemovieheader(filetype:">func makeMovieHeader(fileType: AVFileType) throws -&gt; Data</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">지정한 파일 타입의 동영상 헤더를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avmovie/writeheader(to:filetype:options:">func writeHeader(to: URL, fileType: AVFileType, options: AVMovieWritingOptions) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">지정된 URL에 영화 헤더를 씁니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avmoviewritingoptions.md">struct AVMovieWritingOptions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">대상 URL에 영화 헤더를 쓰는 동작을 제어하는 옵션을 정의하는 구조체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmovie/is(compatiblewithfiletype:">View on Apple Developer</a>)*</span>
