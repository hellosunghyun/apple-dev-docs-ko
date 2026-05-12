---
source_path: "documentation/AVFoundation/avassetreaderoutput/copynextsamplebuffer.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetreaderoutput/copynextsamplebuffer"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:copynextsamplebuffer:0000:0001">copyNextSampleBuffer()</span>

<span class="ko-segment" data-segment-id="seg:paragraph:copynextsamplebuffer:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:copynextsamplebuffer:0002:0001">출력에서 다음 샘플 버퍼를 복사합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:copynextsamplebuffer:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:copynextsamplebuffer:0004:0001">iOS 4.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:copynextsamplebuffer:0004:0002">iPadOS 4.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:copynextsamplebuffer:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:copynextsamplebuffer:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:copynextsamplebuffer:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:copynextsamplebuffer:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func copyNextSampleBuffer() -> CMSampleBuffer?
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">출력 샘플 버퍼 또는 모든 샘플을 읽었거나 오류가 발생한 경우 <code>nil</code>입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">사용 가능한 모든 샘플 버퍼를 읽은 경우나 오류가 있는 경우 이 메서드는 <code>nil</code>을 반환합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">사유를 확인하려면 에셋 리더의 <a href="avassetreader/status-swift.property.md">@@TOKEN_0@@</a> 속성 값을 확인합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avassetreaderoutput/provider.md">AVAssetReaderOutput.Provider</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">에셋 리더에서 공통 미디어 유형의 샘플 모음을 읽는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avassetreaderoutput/randomaccesscontroller.md">AVAssetReaderOutput.RandomAccessController</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">지정된 시간 범위를 읽도록 출력 공급자를 재설정하는 데 사용되는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avassetreaderoutput/supportedpayload.md">AVAssetReaderOutput.SupportedPayload</a></span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetreaderoutput/copynextsamplebuffer(">Apple Developer에서 보기</a>)*</span>
