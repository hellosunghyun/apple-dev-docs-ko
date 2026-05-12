---
source_path: "documentation/AVFoundation/avassetwriterinputtaggedpixelbuffergroupadaptor/pixelbufferpool.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetwriterinputtaggedpixelbuffergroupadaptor/pixelbufferpool"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:pixelbufferpool:0000:0001">pixelBufferPool</span>

<span class="ko-segment" data-segment-id="seg:paragraph:pixelbufferpool:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:pixelbufferpool:0002:0001">태그된 버퍼 그룹의 픽셀 버퍼를 공급하고 효율적으로 재활용하는 픽셀 버퍼 풀입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:pixelbufferpool:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:pixelbufferpool:0004:0001">iOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:pixelbufferpool:0004:0002">iPadOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:pixelbufferpool:0004:0003">Mac Catalyst 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:pixelbufferpool:0004:0004">macOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:pixelbufferpool:0004:0005">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var pixelBufferPool: CVPixelBufferPool? { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">최고 효율을 위해 이 풀에서 태그된 버퍼 그룹의 픽셀 버퍼를 <a href="https://developer.apple.com/documentation/CoreVideo/CVPixelBufferPoolCreatePixelBuffer(_:_:_:">@@TOKEN_0@@</a>) 함수로 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 속성의 값은 연결된 <a href="avassetwriter.md">@@TOKEN_0@@</a> 객체에서 <a href="avassetwriter/startwriting(">@@TOKEN_1@@</a>.md) 호출 전에 <code>nil</code>입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">쓰기 시작 후 이 속성을 조회하면 <code>non-nil</code> 값을 얻을 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 속성은 key-value 관찰이 지원되지 않습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">관련 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[var sourcePixelBufferAttributes: [String : any Sendable]?](avassetwriterinputtaggedpixelbuffergroupadaptor/sourcepixelbufferattributes.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">어댑터의 픽셀 버퍼 풀이 제공하는 버퍼의 속성입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetwriterinputtaggedpixelbuffergroupadaptor/pixelbufferpool">View on Apple Developer</a>*</span>
