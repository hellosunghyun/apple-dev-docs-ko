---
source_path: "documentation/AVFoundation/avassetwriter/moviefragmentinterval.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetwriter/moviefragmentinterval"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:moviefragmentinterval:0000:0001">movieFragmentInterval</span>

<span class="ko-segment" data-segment-id="seg:paragraph:moviefragmentinterval:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:moviefragmentinterval:0002:0001">The interval at which to write movie fragments.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:moviefragmentinterval:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:moviefragmentinterval:0004:0001">iOS 4.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:moviefragmentinterval:0004:0002">iPadOS 4.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:moviefragmentinterval:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:moviefragmentinterval:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:moviefragmentinterval:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:moviefragmentinterval:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var movieFragmentInterval: CMTime { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">아래 그림은 얼굴 기하 구조(<a href="arscnfacegeometry.md">@@TOKEN_0@@</a>)의 두 상태를 보여주며, 이 계수에 대해 <code>0.0</code>과 <code>1.0</code> 값을 표시합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">두 상태 모두에서 다른 <a href="arfaceanchor/blendshapelocation.md">@@TOKEN_0@@</a> 계수의 값은 <code>0.0</code>으로 설정됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">!<a href="https://docs-assets.developer.apple.com/published/12b6bc86e2a90f4ade7c069ac69d5842/media-2930073%402x.png">None</a></span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">To enable fragment writing, set a valid <a href="https://developer.apple.com/documentation/CoreMedia/CMTime">@@TOKEN_0@@</a> value.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0003">For best performance when writing to external storage devices, set the movie fragment interval to 10 seconds or greater.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">You can’t set this value after writing starts.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avassetwriter/initialmoviefragmentinterval.md">var initialMovieFragmentInterval: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">The interval at which to write the initial movie fragment.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avassetwriter/initialmoviefragmentsequencenumber.md">var initialMovieFragmentSequenceNumber: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">The sequence number of the initial movie fragment.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avassetwriter/producescombinablefragments.md">var producesCombinableFragments: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">A Boolean value that indicates whether the asset writer outputs movie fragments suitable for combining with others.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avassetwriter/overalldurationhint.md">var overallDurationHint: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">A hint of the final duration of the output file.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avassetwriter/movietimescale.md">var movieTimeScale: CMTimeScale</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">The time scale of the movie.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetwriter/moviefragmentinterval">View on Apple Developer</a>*</span>
