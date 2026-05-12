---
source_path: "documentation/Accelerate/applying-transformations-to-selected-colors-in-an-image.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/applying-transformations-to-selected-colors-in-an-image"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:applying-transformations-to-selected-colors-in-an-image:0000:0001">이미지에서 선택한 색상에 변환 적용</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applying-transformations-to-selected-colors-in-an-image:0001:0001">**프레임워크**: Accelerate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applying-transformations-to-selected-colors-in-an-image:0002:0001">멀티차원 룩업 테이블을 사용해 이미지의 색상 범위를 채도 감소시킵니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applying-transformations-to-selected-colors-in-an-image:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:applying-transformations-to-selected-colors-in-an-image:0004:0001">macOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applying-transformations-to-selected-colors-in-an-image:0004:0002">Xcode 15.2+</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0005:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0001">이 샘플 코드를 사용하면 선택한 색상과의 유사도에 따라 이미지의 색상을 채도 감소할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0002">예를 들어 아래 이미지는 원본 이미지(왼쪽)와 변환된 이미지(오른쪽)를 보여줍니다. 이 앱은 노란색이 아닌 케이크 스프링클을 채도를 제거해 그레이스케일로 변환했습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0007:0001">!<a href="https://docs-assets.developer.apple.com/published/5dcd704e85563a225fd9fd045f29208c/comparison_2x.png">A comparison of the original image of colorful cake sprinkles with its selectively-desaturated counterpart.</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">코드를 탐색하기 전에 앱을 빌드하고 실행해 이미지에 적용되는 다양한 변환의 효과를 먼저 확인할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">앱에서 작은 이미지를 클릭해 색상을 선택하면 앱이 변환 결과를 큰 이미지로 표시합니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:create-the-lookup-table-data:0009:0001">룩업 테이블 데이터 생성</span>

<span class="ko-segment" data-segment-id="seg:paragraph:create-the-lookup-table-data:0010:0001">이 샘플 코드 프로젝트에서 사용하는 다차원 룩업 테이블은 각 축에 <code>entriesPerChannel</code> 값이 있는 3D 큐브입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:create-the-lookup-table-data:0011:0001">앱은 <code>targetLabColor</code> 변수를 사용자 인터페이스에서 사용자가 선택한 색상으로 정의합니다.</span>

```swift
let targetLabColor = ColorConverter.rgbToLab(red: targetRGB[0],
                                             green: targetRGB.count > 1 ? targetRGB[1] : targetRGB[0],
                                             blue: targetRGB.count > 2 ? targetRGB[2] : targetRGB[0])
```

<span class="ko-segment" data-segment-id="seg:paragraph:create-the-lookup-table-data:0013:0001">아래 코드는 각 색상 채널에서 <code>0</code>부터 <code>1</code>까지 <code>entriesPerChannel</code>회 반복하며 다차원 룩업 테이블 데이터를 채웁니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:create-the-lookup-table-data:0013:0002">각 반복에서 코드는 <a href="https://developer.apple.com/documentation/simd/simd_distance-2dror">@@TOKEN_0@@</a>를 호출해 목표 색상과 빨강, 초록, 파랑 루프에서 정의한 색상 사이의 L*a*b* 색 공간 유클리드 거리를 계산합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:create-the-lookup-table-data:0014:0001">두 색상 간의 거리는 앱이 룩업 테이블의 각 색상 값에 적용하는 채도 감소 또는 어둡게 처리의 기준이 됩니다.</span>

```swift
var bufferIndex = 0
let multiplier = CGFloat(UInt16.max)
for red in ramp {
    for green in ramp {
        for blue in ramp {
           
            let srcLabColor = ColorConverter.rgbToLab(red: red, green: green, blue: blue)
            
            let distance = simd_distance(targetLabColor, srcLabColor)
            
            let effectMultiplier = 1 - simd_smoothstep(0, tolerance, distance)
            
            let src = NSColor(red: red,
                              green: green,
                              blue: blue,
                              alpha: 1)
            
            let dest = NSColor(hue: src.hueComponent,
                               saturation: src.saturationComponent * (desaturate ? CGFloat(effectMultiplier) : 1),
                               brightness: src.brightnessComponent * (darken ? CGFloat(effectMultiplier) : 1),
                               alpha: 1)
            
            lookupTableData[ bufferIndex ] = UInt16(dest.redComponent * multiplier)
            bufferIndex += 1
            
            lookupTableData[ bufferIndex ] = UInt16(dest.greenComponent * multiplier)
            bufferIndex += 1
            
            lookupTableData[ bufferIndex ] = UInt16(dest.blueComponent * multiplier)
            bufferIndex += 1
        }
    }
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:create-the-lookup-table-data:0016:0001">다차원 룩업 테이블 데이터 생성에 대한 자세한 내용은 <a href="applying-color-transforms-to-images-with-a-multidimensional-lookup-table.md">@@TOKEN_0@@</a>를 참고하세요.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:create-the-multidimensional-lookup:0017:0001">다차원 룩업 생성</span>

<span class="ko-segment" data-segment-id="seg:paragraph:create-the-multidimensional-lookup:0018:0001"><a href="vimage/multidimensionallookuptable.md">@@TOKEN_0@@</a> 구조체는 룩업 테이블을 사용해 소스 이미지를 변환하며, 선택한 대상 색상에 가깝지 않은 색상의 채도를 감소하거나 어둡게 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:create-the-multidimensional-lookup:0019:0001">아래 코드는 다차원 룩업 테이블 구조를 생성하고, 세 개의 소스 평면 버퍼에 룩업 테이블을 적용한 다음, 결과를 세 개의 대상 버퍼에 기록합니다.</span>

```swift
let lookupTable = vImage.MultidimensionalLookupTable(
    entryCountPerSourceChannel: entryCountPerSourceChannel,
    destinationChannelCount: destChannelCount,
    data: lookupTableData)

lookupTable.apply(sources: rgbSourceBuffers,
                  destinations: [ redDestinationBuffer,
                                  greenDestinationBuffer,
                                  blueDestinationBuffer ],
                  interpolation: .full)
```

<span class="ko-segment" data-segment-id="seg:paragraph:create-the-multidimensional-lookup:0021:0001">세 개의 대상 평면 버퍼에는 변환된 이미지가 들어 있습니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:create-a-core-graphics-image:0022:0001">Core Graphics 이미지 생성</span>

<span class="ko-segment" data-segment-id="seg:paragraph:create-a-core-graphics-image:0023:0001">아래 코드는 세 개의 평면 버퍼를 단일 RGB 버퍼로 인터리브합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:create-a-core-graphics-image:0023:0002">마지막으로 <a href="vimage/pixelbuffer/makecgimage(cgimageformat:">@@TOKEN_0@@</a>.md) 함수는 앱이 사용자 인터페이스에 표시하는 Core Graphics 이미지를 반환합니다.</span>

```swift
interleavedDestinationBuffer.interleave(planarSourceBuffers: [ redDestinationBuffer,
                                                               greenDestinationBuffer,
                                                               blueDestinationBuffer ])
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0025:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="applying-color-transforms-to-images-with-a-multidimensional-lookup-table.md">Applying color transforms to images with a multidimensional lookup table</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">색상 공간 변환 및 기타 점별 연산을 최적화하기 위해 변환 값을 미리 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="cropping-to-the-subject-in-a-chroma-keyed-image.md">Cropping to the subject in a chroma-keyed image</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">chroma-key 색상을 알파 값으로 변환하고 Accelerate를 사용해 투명 픽셀을 잘라냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="vimagemultidimensionaltable_create(_:_:_:_:_:_:_:">func vImageMultidimensionalTable_Create(UnsafePointer&lt;UInt16&gt;, UInt32, UInt32, UnsafePointer&lt;UInt8&gt;, vImageMDTableUsageHint, vImage_Flags, UnsafeMutablePointer&lt;vImage_Error&gt;!) -&gt; vImage_MultidimensionalTable!</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">다차원 룩업 테이블을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="vimagemultidimensionalinterpolatedlookuptable_planarf(_:_:_:_:_:_:">func vImageMultiDimensionalInterpolatedLookupTable_PlanarF(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, vImage_MultidimensionalTable, vImage_InterpolationMethod, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">32비트 평면 이미지를 변환하기 위해 다차원 룩업 테이블을 사용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="vimagemultidimensionalinterpolatedlookuptable_planar16q12(_:_:_:_:_:_:">func vImageMultiDimensionalInterpolatedLookupTable_Planar16Q12(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, vImage_MultidimensionalTable, vImage_InterpolationMethod, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">16Q12 평면 이미지를 변환하기 위해 다차원 룩업 테이블을 사용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="vimagemultidimensionaltable_retain(_:">func vImageMultidimensionalTable_Retain(vImage_MultidimensionalTable!) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">다차원 테이블을 유지합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="vimagemultidimensionaltable_release(_:">func vImageMultidimensionalTable_Release(vImage_MultidimensionalTable!) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">다차원 테이블을 해제합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="vimage_multidimensionaltable.md">typealias vImage_MultidimensionalTable</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">다차원 룩업 테이블을 나타내는 불투명 포인터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001"><a href="vimagemdtableusagehint.md">struct vImageMDTableUsageHint</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">다차원 룩업 테이블의 사용 용도를 나타내는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001"><a href="vimage_interpolationmethod.md">struct vImage_InterpolationMethod</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">서로 다른 보간 메서드를 나타내는 상수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">*<a href="https://developer.apple.com/documentation/accelerate/applying-transformations-to-selected-colors-in-an-image">View on Apple Developer</a>*</span>
