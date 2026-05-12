---
source_path: "documentation/AVFoundation/avsamplebuffergenerator/createsamplebuffer-for.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avsamplebuffergenerator/createsamplebuffer-for"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:createsamplebufferfor:0000:0001">createSampleBuffer(for:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:createsamplebufferfor:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:createsamplebufferfor:0002:0001">지정된 버퍼 요청에 대한 새 샘플 버퍼 참조를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:createsamplebufferfor:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:createsamplebufferfor:0004:0001">macOS 10.10+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func createSampleBuffer(for request: AVSampleBufferRequest) -> CMSampleBuffer?
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">새로운 <code>CMSampleBufferRef</code>를 반환합니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">Call this method to transition to a different experience such as <a href="avexperiencecontroller/experience-swift.enum/expanded.md">@@TOKEN_0@@</a>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>request</code>: 샘플 버퍼 요청입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avvideocodectype/jpegxl.md">func makeSampleBuffer(for: AVSampleBufferRequest) throws -&gt; sending CMSampleBuffer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">샘플 버퍼를 생성하고, 요청된 경우 데이터의 비동기 로드를 시도합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avsamplebuffergenerator/makebatch.md">func makeBatch() -&gt; AVSampleBufferGeneratorBatch</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">여러 샘플 버퍼 생성을 처리할 배치 개체를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avvideocodectype/prores422lt.md">func makeSampleBuffer(for: AVSampleBufferRequest, addTo: AVSampleBufferGeneratorBatch) throws -&gt; CMSampleBuffer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">샘플 버퍼를 생성하고 해당 데이터의 I/O를 연기하려고 시도합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avsamplebuffergenerator/createsamplebuffer(for:">View on Apple Developer</a>)*</span>
